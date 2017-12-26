const socket = io()
const bot = document.querySelector('.chat-field__box--cpu p')
const chatField = document.querySelector('.chat-field')
const user = document.querySelector('.chat-field__box--user p')
const cpu = document.querySelector('.chat-field__text.chat-field__text--cpu')
const userInput = document.querySelector('.msg__input')

// make element param pick between user or cpu
const createMessage = (element, account) => {
  let li = document.createElement('li')
  let p = document.createElement('p')
  // li.classList = 'chat-field__box chat-field__box--user'
  // p.classList = 'chat-field__text chat-field__text--user'

  if (element === 'li' && account === 'cpu') {
    li.classList = 'chat-field__box chat-field__box--cpu'
    return li
  } else if (element === 'li' && account === 'user') {
    li.classList = 'chat-field__box chat-field__box--user'
    return li
  }
  if (element === 'p' && account === 'cpu') {
    p.classList = 'chat-field__text chat-field__text--cpu'
    return p
  } else if (element === 'p' && account === 'user') {
    p.classList = 'chat-field__text chat-field__text--user'
    return p
  }
}

const li = createMessage('mo')

console.log(li)

const btnSubmit = document.querySelector('.msg__btn.btn')
console.log(bot)
socket.on('hello', function (data) {
  const li = createMessage('li', 'cpu')
  const p = createMessage('p', 'cpu')
  p.textContent = data.message
  li.appendChild(p)
  chatField.appendChild(li)
  // bot.textContent = data.message
  console.log(data)
  socket.emit('my other event', { my: 'data' })
})
btnSubmit.addEventListener('click', function (event) {
  event.preventDefault()
  const input = userInput.value
  const li = createMessage('li', 'user')
  const p = createMessage('p', 'user')
  p.textContent = input
  li.appendChild(p)
  chatField.appendChild(li)
  socket.emit('event from input', {message: input})
  console.log(userInput.value)
})
socket.on('response', (data) => {
  console.log('eeh', data)
  const li = createMessage('li', 'cpu')
  const p = createMessage('p', 'cpu')
  p.textContent = data.message
  li.appendChild(p)
  chatField.appendChild(li)
})
