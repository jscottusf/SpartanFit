//Connect to Mongo database
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//your local database url
//27017 is the default mongoDB port
const uri = 'mongodb://localhost/spartanfit';

mongoose.connect(process.env.MONGODB_URI || uri).then(
  () => {
    console.log('Connected to Mongo');
  },
  err => {
    console.log('error connecting to Mongo: ');
    console.log(err);
  }
);

module.exports = mongoose.connection;
