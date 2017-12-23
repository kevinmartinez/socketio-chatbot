// // Create the express app
const express = require('express')
const app = express()
const handlebars = require('handlebars')
// const hbs = require('hbs')
// const server = require('http').Server(app)
// const io = require('socket.io')(server)
// const port = 3030
// const handlebars = require('handlebars')

app.set('view engine', 'handlebars')
app.engine('handlebars', handlebars.registerPartial({
  defaultLayout: __dirname + '/views/layouts/default.hbs',
  partialsDir: __dirname + '/views/partials',
  layoutsDir: __dirname + '/views/layouts'
}))

// hbs.registerPartial('header', 'partial value')
// hbs.registerPartials(__dirname + '/views/partials'['moo', callback])
/* rendering engine, with change extension to .hbs */
// app.engine('handlebars', exphbs({
//   extname: '.hbs',
//   layoutsDir: path.join(__dirname, 'views', 'layouts'),
//   partialsDir: path.join(__dirname, 'views', 'partials'),
//   defaultLayout: 'main',
//   helpers: {
//     foo: function () {
//       return 'foo'
//     }
//   }
// }))

/* set view engine */
// app.set('view engine', 'hbs')
/* views directory to search */
app.set('views', './views')

/* home path */
app.get('/', function (req, res, next) {
  res.render('main', {msg: 'Hello World!'})
})

app.get('/hello-gif', function (req, res) {
  var gifUrl = 'http://media2.giphy.com/media/gYBVM1igrlzH2/giphy.gif'
  res.render('hello-gif', {gifUrl: gifUrl})
})

app.use('/static', express.static('src'))

app.listen(3000, function () {
  console.log('app running on 3000')
})
// //server.listen(80);
// Listen on port 3030
// app.listen(port, function () {
//   console.log(`Example app listening on port ${port}!`)
// })

// // Set template engine
// app.set('view engine', 'hbs')
// app.get('/hello-gif', function (req, res) {
//   var gifUrl = 'http://media2.giphy.com/media/gYBVM1igrlzH2/giphy.gif'
//   res.render('hello-gif', {gifUrl: gifUrl})
// })

// app.get('/', function (req, res) {
//   res.render('index')
// })

// io.on('connection', function (socket) {
//   socket.emit('news', { hello: 'world' });
//   socket.on('my other event', function (data) {
//     console.log(data);
//   });
// });

// Serve static files from src folder

// Default view
// app.get('/', function (req, res) {
//   res.render('index')
// })

// // Test another route
// app.get('/hello', function(req, res) {
//   res.render('hello');
//   //res.send('<h1>Is it me you are looking for?</h1>');
// });
