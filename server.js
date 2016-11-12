var express = require('express');
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "./assets")));
app.use(express.static(path.join(__dirname, "./node_modules")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render("index.ejs");
})

app.get('/blog', function(req, res){
  res.render('blog.ejs')
})

app.listen(8000, function(){
  console.log("listening on port 8000")
})