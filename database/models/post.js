const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  username: { type: String, required: true },
  postBody: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  likeCount: { type: Number, default: 0 },
  commentCount: { type: Number, default: 0 },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
