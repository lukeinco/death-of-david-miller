const { Post, User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    posts: async () => {
      try {
        console.log("++++++++++++++++++++++++++")
        console.log("Trying to get my posts!")
        return Post.find().sort({ createdAt: -1 });

      } catch (err){
        console.log("++++++++++++++++++++++++++")
        console.log(err)
      }
    },

    users: async () => {
      return User.find().sort({ createdAt: -1 });
    }
  },

  Mutation: {
    addUser: async (parent, { username, password }) => {
      // First we create the user
      const user = await User.create({ username, password });
      // To reduce friction for the user, we immediately sign a JSON Web Token and log the user in after they are created
      const token = signToken(user);
      // Return an `Auth` object that consists of the signed token and user's information
      return { token, user };
    },
    login: async (parent, { username, password }) => {
      // Look up the user by the provided email address. Since the `email` field is unique, we know that only one person will exist with that email
      const user = await User.findOne({ username });

      // If there is no user with that email address, return an Authentication error stating so
      if (!user) {
        throw AuthenticationError
      }

      // If there is a user found, execute the `isCorrectPassword` instance method and check if the correct password was provided
      const correctPw = await user.isCorrectPassword(password);

      // If the password is incorrect, return an Authentication error stating so
      if (!correctPw) {
        throw AuthenticationError
      }

      // If email and password are correct, sign user into the application with a JWT
      const token = signToken(user);

      // Return an `Auth` object that consists of the signed token and user's information
      return { token, user };
    },
    addPost: async (parent, { postText, postAuthor }, context) => {
      const post = await Post.create({ postText, postAuthor });

      await User.findOneAndUpdate(
        { _id: context._id },
        { $addToSet: { posts: post._id } }
      );

      return post;
    },
    addComment: async (parent, { postId, commentText, commentAuthor }) => {
      console.log('Received parameters:', { postId, commentText, commentAuthor });
    
      // Ensure commentAuthor is not null, replace 'UnknownUser' with a default value if needed
      const safeCommentAuthor = commentAuthor || 'UnknownUser';
    
      // Find the post and update the comments
      const updatedPost = await Post.findOneAndUpdate(
        { _id: postId },
        {
          $addToSet: { comments: { commentText, commentAuthor: safeCommentAuthor } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    
      // Return the updated post
      console.log('Updated post:', updatedPost);
      return updatedPost;
    },
    removePost: async (parent, { postId }) => {
      return Post.findOneAndDelete({ _id: postId });
    },
    removeComment: async (parent, { postId, commentId }) => {
      return Post.findOneAndUpdate(
        { _id: postId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;