const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  username: { type: String, required: true },
  commentBody: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  likeCount: { type: Number, default: 0 },
  commentCount: { type: Number, default: 0 },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
