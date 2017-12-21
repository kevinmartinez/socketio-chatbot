const express = require('express');
const app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3030);

// app.set('view engine', 'pug');


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
// app.use('/static', express.static('src'));
io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

// // Create the express app
// const express = require('express');
// const app = express();
// const server = require('http').Server(app)
// const io = require('socket.io')(server)
// const port = 3030;

// //server.listen(80);
// // Listen on port 3030
// app.listen(port, function() {
//   console.log(`Example app listening on port ${port}!`);
// });


// // Set template engine
// app.set('view engine', 'pug');

// app.get('/', function (req, res) {

//   res.sendFile(__dirname + '/views/index.pug');
//   res.render('index')
// });

// io.on('connection', function (socket) {
//   socket.emit('news', { hello: 'world' });
//   socket.on('my other event', function (data) {
//     console.log(data);
//   });
// });



// Serve static files from src folder
//app.use('/static', express.static('src'));

// Default view
// app.get('/', function(req, res){
//   res.render('index');
// });

// // Test another route
// app.get('/hello', function(req, res) {
//   res.render('hello');
//   //res.send('<h1>Is it me you are looking for?</h1>');
// });


