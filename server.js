const express = require('express');
const cors = require('cors');
//const bodyParser = require('body-parser');
const dbConnection = require('./database');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('./passport');
const mongoose = require('mongoose');
const routes = require('./routes');
const MongoStore = require('connect-mongo')(session);
const PORT = process.env.PORT || 3001;
const app = express();

//require routes
//const user = require('./routes/user');

// Define middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Sessions
app.use(
  session({
    secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false, //required
    saveUninitialized: false, //required
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session()); // calls the deserializeUser

// Define API routes
// Routes
//app.use('/user', user);
app.use(routes);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
