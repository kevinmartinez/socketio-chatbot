const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const port = 3030

app.set('views', (__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.render('index', { title: 'Express' })
})

app.get('/', function (request, response) {
  response.sendFile(__dirname + '/index')
})

// io.on('connection', (socket) => console.log('a user connected'))
// io.on('connection', function (socket) {
//   console.log('a user connected')
//   socket.on('disconnect', function () {
//     console.log('user disconnected')
//   })
// })

io.on('connection', (socket) => {
  socket.emit('hello', { message: 'woot' })
  socket.on('my other event', function (data) {
    console.log(data)
  })
  socket.on('event from input', (data) => {
    console.log(data)
    if (data.message === 'Why') {
      socket.emit('response', {message: 'Why Not???'})
    } else if (data.message === 'Old?') {
      socket.emit('response', {message: '100 years'})
    }
  })
})

// io.on('connection', function (socket) {
//   socket.on('chat message', function (msg) {
//     console.log('message: ' + msg)
//   })
// })

app.use(express.static('src'))

http.listen(port, () => console.log(`Listening on port: ${port}`))
