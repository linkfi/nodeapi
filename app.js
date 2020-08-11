const Express = require("express");
const Mongoose = require("mongoose");
const BodyParser = require("body-parser");
const { response } = require("express");
//const connectDB = require('./connection');
//const Person = require('./Person.model');

const PORT = 8080;


var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));


app.get('/test', (req,res)=>{
    
    res.send('node api working sucessfully');
});

app.post("/person", async (req,res)=>{

    try {
        /*
        var person = new Person(req.body);;
        var result = await person.save();
        res.send(result);*/
    }
    catch(error){
        response.status(500).send(error);
    }

});


app.get("/people", async (req, res)=>{

    try {
        /*
        var result = await Person.find().exec();
        res.send(result);*/
        res.send('node api working...');
    }
    catch(err){
        res.status(500).send(err);
    }
    
});

app.get("/person/:id", async (req,res) =>{

    try {
        /*
    var person = await Person.findById(req.params.id).exec();
    res.send(person);*/
    res.send('node api working...');
    }
    catch(err){
        res.status(500).send(err);
    }
});

app.put("/person/:id", async (req, res)=>{

    try {
        /*
        var person = await Person.findById(req.params.id).exec();        
        person.set(req.body);
        var result = await person.save();
        res.send(result);*/
        res.send('node api working...');
    }    
    catch(err){
        res.status(500).send(error);
    }
});

app.delete("/person/:id", async(req,res) => {
    try {
        /*
        var result = await Person.deleteOne({_id: req.params.id}).exec();
        res.send(result); */       
        res.send('node api working...');
    }
    catch(err){
        response.status(500).send(err);
    }
});

app.listen(PORT, () => {

    console.log(`server listening at port ${PORT} `);

    /*
    connectDB().then(()=>{
        console.log("mongodb connected");
    }); */
});