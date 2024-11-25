const express = require('express')
const app = express()
//task1

app.get('/greetings/:name', (req, res) => {
  res.send(`<h1>Hello there,${req.params.name} </h1>`)
})
//task2

app.get('/roll/:number', (req, res) => {
  const number = req.params.number
  if (isNaN(number)) {
    res.send('You must specify a number.')
  } else {
    const randomNumber = Math.floor(Math.random() * (parseInt(number) + 1))
    res.send(`You rolled a ${randomNumber}.`)
  }
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
