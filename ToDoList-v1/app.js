//jshint esversion:6

const express = require('express');
const bodyParse = require('body-parser');

const app=express();

let items =[];

app.set("view engine","ejs");


app.use(bodyParse.urlencoded({extended:true}));
app.use(express.static("public"));

app.post("/",function(req,res){
let newTaskItem = req.body.newItem;

if (newTaskItem.trim() !== ''){
  items.push(newTaskItem);
}
else {
  console.log("Error: New item list empty.")
}
res.redirect("/");




})

app.get("/", function (req, res) {

  let today = new Date();

  let  options={
  weekday:"long",
  day:"numeric",
  month:"long"
  }

  let day = today.toLocaleDateString("en-us",options);

  res.render("list", {kindOfDay: day , newTaskItems : items});


})



app.listen(3000, function() {

  console.log("server is Run on port 3000")

})
