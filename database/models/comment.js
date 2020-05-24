const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  username: { type: String, required: true },
  commentBody: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  firstName: { type: String, required: true },
  lastName: String,
  userpic: { type: String, required: true },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
