const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
  commentAuthor: { type: String, required: true },
  commentText: { type: String, required: true },
  date: { type: Date, default: Date.now },
});


module.exports = commentSchema;
