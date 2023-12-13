const { Schema, model } = require('mongoose');

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
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

// GPT Below:
//const commentSchema = require('./comment.model');

// const postSchema = new Schema({
//  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//  postText: { type: String, required: true },
//  dateCreated: { type: Date, default: Date.now },
//  comments: [commentSchema],
// });

const Post = model('Post', postSchema);

module.exports = Post;
