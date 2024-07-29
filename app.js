const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

// every commn goes through a tunnel which is a port
// each has to have a port number
const app = express();//creating an express
const port = 4000;

app.get('/', (req, res) => {
    res.send('we are the code queens')
})

//connect to the data base
mongoose.connect(process.env.MONGODBLINK)
    // reflects the error we had
    .then(() => {
        console.log('connected to the DB');
    })
    .catch(err => {
        console.log(`error connecting to the DB`, err);
    });

//has to listen that port then send a response communicaion
// app.listen(process.env.PORT)
app.listen(process.env.port, () => {
     console.log(`connected on port ${(process.env.port)}`); });

//function student (req,res)