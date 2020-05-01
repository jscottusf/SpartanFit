const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Posts collection and inserts the posts below
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/fitnesswarrior'
);

const postSeed = [
  {
    userHandle: 'Joel',
    postBody: 'hello, social media app',
    createdAt: new Date(Date.now()),
  },
  {
    userHandle: 'Delaney',
    postBody: 'hello, world',
    createdAt: new Date(Date.now()),
  },
  {
    userHandle: 'Caitlin',
    postBody: 'This is my first post',
    createdAt: new Date(Date.now()),
  },
  {
    userHandle: 'Maddie',
    postBody: 'See you real soon',
    createdAt: new Date(Date.now()),
  },
];

db.Post.remove({})
  .then(() => db.Post.collection.insertMany(postSeed))
  .then(data => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
