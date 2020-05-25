const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = mongoose.Schema({
  profileImg: {
    type: String,
    required: true,
    default: 'https://spartanfit.s3.us-east-2.amazonaws.com/1590371866852',
  },
});

const Image = mongoose.model('Image', imageSchema);
module.exports = Image;
