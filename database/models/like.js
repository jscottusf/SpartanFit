const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likeSchema = new Schema({
  createdAt: { type: Date, default: Date.now },
  postId: { type: String, required: true, unique: true },
  liked: { type: Boolean, default: true, required: true },
});

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;
