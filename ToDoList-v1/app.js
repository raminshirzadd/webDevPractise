//jshint esversion:6

const express = require('express');
const bodyParse = require('body-parser');

const app=express();


app.get("/", function (req, res) {

  var today = new Date();
  var currentDay = today.getDay();


if (currentDay === 6 || currentDay === 0){

res.send("BOOOOOOOO!! Today is Weekend")

}else {
  res.send("O O Today is WeekDay")
  

}






})



app.listen(3000, function() {

  console.log("server is Run on port 3000")

})
