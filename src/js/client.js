const socket = io()
const bot = document.querySelector('.chat-field__box--cpu p')
const user = document.querySelector('.chat-field__box--user p')
const userInput = document.querySelector('.msg__input')

const btnSubmit = document.querySelector('.msg__btn.btn')
console.log(bot)
socket.on('hello', function (data) {
  bot.textContent = data.message
  console.log(data)
  socket.emit('my other event', { my: 'data' })
  btnSubmit.addEventListener('click', function (event) {
    event.preventDefault()
    const input = userInput.value
    user.textContent = input
    socket.emit('event from input', {message: input})
    console.log(userInput.value)
  })
})

socket.on('response', (data) => {
  console.log(data)
  bot.textContent = data.message
})
