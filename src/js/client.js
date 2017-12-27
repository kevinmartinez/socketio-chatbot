const socket = io.connect('http://localhost:3030', {'forceNew': true})
const chatField = document.querySelector('.chat-field')
const btnSubmit = document.querySelector('.msg__btn.btn')
const userInput = document.querySelector('.msg__input')

const chatBox = (text, type) => {
  const li = document.createElement('li')
  if (type === 'cpu') {
    li.classList = 'chat-field__box chat-field__box--cpu'
  } else if (type === 'user') {
    li.classList = 'chat-field__box chat-field__box--user'
  }
  const p = document.createElement('p')
  if (type === 'cpu') {
    p.classList = 'chat-field__text chat-field__text--cpu'
  } else if (type === 'user') {
    p.classList = 'chat-field__text chat-field__text--user'
  }
  p.textContent = text
  li.appendChild(p)
  return li
}
socket.on('hello-from-cpu', (data) => {
  console.log(data.message)
})

socket.on('cpu-answer', (data) => {
  const answer = chatBox(data.answer, 'cpu')
  chatField.appendChild(answer)
  console.log(data)
})

socket.on('question', (data) => {
  const question = chatBox(data.question, 'user')
  chatField.appendChild(question)
})

function addMessage (event) {
  event.preventDefault()
  const payload = {question: userInput.value}
  socket.emit('user-input', payload)
}

btnSubmit.addEventListener('click', addMessage)
