const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    firstname : {type:String},
    lastname: {type:String}
});


const Person = mongoose.model("Person", personSchema);

module.exports = Person;