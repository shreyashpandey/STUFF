  const express = require('express');
  const mongoose = require('mongoose');
  const app = express();
  const Thing = require('./models/thing');
  const stuffRoutes = require('./routes/stuff');
  const userRoutes = require('./routes/user');
  const path = require('path');
  mongoose.connect('mongodb+srv://Shrey_786:thisisme@cluster0-3refm.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology: true,useCreateIndex:true, })
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => { 
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });
  const bodyParser = require('body-parser');
  
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST , PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  app.use(bodyParser.json());
  app.use('/images', express.static(path.join(__dirname, 'images')));
  app.use('/api/stuff', stuffRoutes);
  //app.use('/api/stuff', stuffRoutes);
  app.use('/api/auth', userRoutes);
  module.exports = app;