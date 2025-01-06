'use strict';

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const connectDb = require('./config/connectDb');

const app = express();
const PORT = process.env.PORT || 3000;

connectDb();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello');
});

mongoose.connection.once('open', () => {
  console.log('Connected to the Database');
  app.listen(PORT, async () => {
    console.log(`Server started on port ${PORT}`);
  });
});
