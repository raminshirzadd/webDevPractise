//jshint esversion:6

const express = require('express');
const bodyParse = require('body-parser');

const app=express();

var items =[];

app.set("view engine","ejs");


app.use(bodyParse.urlencoded({extended:true}));


app.post("/",function(req,res){
var newTaskItem = req.body.newItem;

if (newTaskItem.trim() !== ''){
  items.push(newTaskItem);
}
else {
  console.log("Error: New item list empty.")
}
res.redirect("/");




})

app.get("/", function (req, res) {

  var today = new Date();

  var  options={
  weekday:"long",
  day:"numeric",
  month:"long"
  }

  var day = today.toLocaleDateString("en-us",options);

  res.render("list", {kindOfDay: day , newTaskItems : items});


})



app.listen(3000, function() {

  console.log("server is Run on port 3000")

})
