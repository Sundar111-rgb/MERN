
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended:true }));




app.get("/api/get", (req,res) => { 
      MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("mydb");
            //Find all documents in the customers collection:
            dbo.collection("Employee").find({}).toArray(function(err, result) {
              if (err) throw err;
               res.send(result);
              db.close();
            });
          });
          
});

app.post("/api/login", (req,res) => { 
  MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        var myobj = req.body;
        console.log('Input',myobj);
        //Find all documents in the customers collection:
        dbo.collection("Employee").find(myobj).toArray(function(err, result) {
          if (err) throw err;
           res.send(result);
           console.log('Output',result)
          db.close();
        });
      });
      
});



app.post("/api/getonerow", (req,res) => {

  MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        var myobj = req.body;
        console.log(myobj)
        //Find all documents in the customers collection:
        dbo.collection("Employee").find(myobj).toArray(function(err, result) {
          if (err) throw err;
          res.send(result);
          console.log(result)
          db.close();
        });
      });
     
});





app.post("/api/insert/",  (req, res) => {
      MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("mydb");
            var myobj = req.body;
            dbo.collection("Employee").insertOne(myobj, function(err, result) {
              if (err) throw err;
              console.log(result);
              db.close();
            });
          });
      const hhh = JSON.stringify(req.body)
      res.send(hhh);
});

app.delete('/api/delete/:EmpID',(req,res) => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
  
    var myquery = { id: req.params.EmpID };
    dbo.collection("Employee").deleteOne(myquery, function(err, obj) {
      if (err) throw err;
      console.log(obj, req.params.k);
      res.send("Deleted Successfully");
      db.close();
    });
  });
    // res.send(myquery);
});

app.put("/api/update/",(req,res) => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = { 'id': "3" };
    var newvalues = { $set: {'first_name': "Mickey", 'last_name': "Canyon 123" } };
    dbo.collection("Employee").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");
      db.close();
    });
  });
  res.send("1 document updated");
});

app.listen(3001, ()=> {
 console.log("running on port 3001")
});