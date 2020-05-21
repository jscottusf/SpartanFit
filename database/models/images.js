const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = mongoose.Schema({
  profileImg: { type: String, required: true },
});

const Image = mongoose.model('Image', imageSchema);
module.exports = Image;
