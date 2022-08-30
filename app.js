const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _=require("lodash");


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req,res){
res.render("home");
});




app.get("/av", function(req,res){
res.render("av");
});

app.get("/el", function(req,res){
res.render("el");
});

app.get("/gra", function(req,res){
res.render("gra");
});

app.get("/id", function(req,res){
res.render("id");
});

app.listen(process.env.PORT||2000,function() {
  console.log("Server started on port 3000");
});
