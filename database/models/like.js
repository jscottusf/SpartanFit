const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likeSchema = new Schema({
  postId: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;
