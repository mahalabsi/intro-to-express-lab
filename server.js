const express = require('express')
const app = express()
const collectibles = [
  { name: 'shiny ball', price: 5.95 },
  { name: 'autographed picture of a dog', price: 10 },
  { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
]
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

app.get('/collectibles/:index', (req, res) => {
  const index = parseInt(req.params.index)
  if (isNaN(index) || index < 0 || index >= collectibles.length) {
    res.send('This item is not yet in stock. Check back soon!')
  } else {
    const item = collectibles[index]
    res.send(
      `So, you want the ${item.name}? For ${item.price}, it can be yours!`
    )
  }
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
