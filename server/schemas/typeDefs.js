const typeDefs = `
  type Post {
    _id: ID
    postText: String
    postAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Comment {
    _id: ID
    commentText: String
    createdAt: String
  }

  type Query {
    posts: [Post]!
    post(postId: ID!): Post
  }

  type Mutation {
    addUser(name: String!, password: String!): Auth
    login(name: String!, password: String!): Auth
    addPost(postText: String!, postAuthor: String!): Post
    addComment(postId: ID!, commentText: String!): Post
    removePost(postId: ID!): Post
    removeComment(postId: ID!, commentId: ID!): Post
  }
`;
// user.typedefs.js
//type User {
//  _id: ID!
  //username: String!
  //posts: [Post]!
//}

//input CreateUserInput {
  //username: String!
  //password: String!
//}

//type AuthPayload {
  //token: String
  // user: User
//}

//type Query {
  // Add relevant queries for your use case
//}

//type Mutation {
 // createUser(input: CreateUserInput): AuthPayload
 // loginUser(username: String!, password: String!): AuthPayload
  // Add other user-related mutations if needed
// }

// post.typedefs.js
//type Post {
 // _id: ID!
 // userId: ID!
 // postText: String!
 // dateCreated: String!
 // comments: [Comment]!
//}

//input CreatePostInput {
  //postText: String!
//}

//type Mutation {
  //createPost(input: CreatePostInput): Post
  //deletePost(postId: ID!): Post
//}

// comment.typedefs.js
//type Comment {
  //_id: ID!
  //userId: ID!
  //postId: ID!
  //commentText: String!
  //date: String!
//}
//
//input CreateCommentInput {
  //postId: ID!
  //commentText: String!
//}

//type Mutation {
 // createComment(input: CreateCommentInput): Comment
  //deleteComment(commentId: ID!): Comment
// }


module.exports = typeDefs;


