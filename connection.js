const mongoose = require("mongoose");
const Person = require('./Person.model');

const connection = "mongodb://mongo:27017/personDB";

const connectDB = () =>{
    return mongoose.connect(connection);
};

module.exports = connectDB;