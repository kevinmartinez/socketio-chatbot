// Create the express app
const express = require('express');
const app = express();

// Set template engine
app.set('view engine', 'pug');

// Serve static files from src folder
app.use('/static', express.static('src'));

// Default view
app.get('/', function(req, res){
  res.render('index');
});

// Test another route
app.get('/hello', function(req, res) {
  res.render('hello');
  //res.send('<h1>Is it me you are looking for?</h1>');
});

// Listen on port 3030
app.listen(3030, function() {
  console.log('Example app listening on port 3000!');
});
