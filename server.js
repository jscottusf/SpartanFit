const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/api/home', function (req, res) {
  res.send('Welcome!');
});
app.get('/api/secret', function (req, res) {
  res.send('The password is potato');
});

// Define API routes
app.use(routes);

// Connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/spartanfit');

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
