const express = require('express')
const app = express()
const port = 3030

app.set('view engine', 'pug')

app.get('/', function (request, response) {
  response.render('index')
})

app.use(express.static('src'))

app.listen(port, () => console.log(`Example app listening on port: ${port}`))
