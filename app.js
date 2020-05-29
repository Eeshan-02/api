const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config')

//Set Middlewares 
app.use(bodyParser.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Import route
const postRoute = require('./routes/posts.js');

app.use('/posts', postRoute);

//Routes
app.get('/',(req,res) => {
    res.send('Stay Home Stay safe');

});


mongoose.connect( process.env.Database_connection, 
    { useNewUrlParser: true, useUnifiedTopology: true, }, () => console.log("connected"));


//listen to the server
app.listen(3000);