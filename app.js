const express = require('express')
const { use } = require('express/lib/application')
const app = express()

//permite recibir json de respuesta a las peticiones
app.use(express.json());

app.listen(4000, () => {
  console.log('Server running on localhost:4000...')
})

app.get('/', (request, response) => {
  response.send('Hello World')
})

app.post('/sum', (request, response) => {
  const {number1, number2} = request.body;
  const result = number1 + number2;
  response.send({message: result});
})

app.post('/subtract', (request, response) => {
  const {number1, number2} = request.body;
  const result = number1 - number2;
  response.send({message: result});
})

app.post('/multiply', (request, response) => {
  const {number1, number2} = request.body;
  const result = number1 * number2;
  response.send({message: result});
})

app.post('/division', (request, response) => {
  const {number1, number2} = request.body;
  const result = number1 / number2;
  response.send({message: result});
})