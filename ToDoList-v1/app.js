const express = require('express');
const bodyParse = require('body-parser');

const app=express();


app.get("/", function (req, res) {

 res.sendfile(__dirname + "/index.html");

})



app.listen(3001, function() {

  console.log("server is Run on port 3001")

})
