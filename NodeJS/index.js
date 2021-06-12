const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors');
const path = require('path');
const connectDB = require('./DB/Connection');
var port=process.env.Port || 3000;
var app=express();
app.use(express.json({ extended: false }));
var eventRoutes = require('./Routes/routes');
connectDB();
app.listen(port,(err) => {
    if(err){
        console.log("Server not startd");
    }
    else{
        console.log("server up and running");
    }
});
app.use(cors({ origin: 'http://localhost:4200' }));
app.use('/events',eventRoutes);
app.use('/images', express.static(path.join('images')));
app.use('/api/userModel',eventRoutes);

  
// });