var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('stuff'));
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res){
  res.render('index');
});
app.get('/contact', function(req, res){
  res.render('contact', {query: req.query});
});
app.post('/contact', function(req, res){
  console.log(req.body);
  res.render('contact-success', {data: req.body});
});
app.get('/profile/:name', function(req, res){
  var data = {age:29, job:'ninja', hobbies:['eating', 'fighting', 'chilling']};
  res.render('profile', {person: req.params.name, data: data});
})
app.listen(3000);
