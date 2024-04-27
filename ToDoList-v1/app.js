//jshint esversion:6

const express = require('express');
const bodyParse = require('body-parser');

const app=express();

app.set("view engine","ejs");


app.get("/", function (req, res) {

  var today = new Date();
  var currentDay = today.getDay();


if (currentDay === 6 || currentDay === 0){

day = "Weekend";
}else if (currentDay === 1){
  day = "Monday";
}else if (currentDay === 2){
  day = "Tuesday";
}else if (currentDay === 3){
  day = "Wednesday";
}else if (currentDay === 4){
  day = "Thursday";
}else if (currentDay === 5){
  day = "Friday";
}

res.render("list", {kindOfDay: day});



})



app.listen(3000, function() {

  console.log("server is Run on port 3000")

})
