const express = require('express')
const app = express()
const path = require('path')
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.set('views', (__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => res.render('index'))
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index')))

io.sockets.on('connection', (socket) => {
  console.log('something connected to socket.io')

  socket.emit('hello-from-cpu', {'message': 'Welcome'})
  socket.on('user-input', (data) => {
    io.sockets.emit('question', data)
    console.log(data.question)
    if (data.question === 'moo') {
      io.sockets.emit('cpu-answer', {answer: 'cow'})
    } else {
      io.sockets.emit('cpu-answer', {answer: 'lol'})
    }
  })
})

app.use(express.static('src'))
server.listen(3030)
