const mongoose = require('mongoose');

const URI ="mongodb://localhost:27017/Halli-Cricket";
// const URI ="mongodb+srv://dbUser:dbUser@cluster0.qjsqh.mongodb.net/Halli-Cricket?retryWrites=true&w=majority";



const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('db connected..!');
};

module.exports = connectDB;
