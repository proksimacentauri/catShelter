const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
require('./models/Cat');
require('./models/User');

mongoose.connect(keys.mongoURI);
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//require routes

require('./routes/catRoutes')(app);


const PORT = process.env.PORT || 5000;

app.listen(PORT);

module.exports = app;