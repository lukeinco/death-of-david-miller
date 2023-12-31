const { Schema, model } = require('mongoose');
const commentSchema = require("./comment.js");

const postSchema = new Schema({
  postText: {
    type: String,
    required: 'Please enter a post!',
    minlength: 1,
    trim: true,
  },
  postAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  image: {
    type: String,
  },
  comments: [commentSchema ],
});


const Post = model('Post', postSchema);

module.exports = Post;
