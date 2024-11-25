const express = require('express')
const app = express()
const collectibles = [
  { name: 'shiny ball', price: 5.95 },
  { name: 'autographed picture of a dog', price: 10 },
  { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
]

const shoes = [
  { name: 'Birkenstocks', price: 50, type: 'sandal' },
  { name: 'Air Jordans', price: 500, type: 'sneaker' },
  { name: 'Air Mahomeses', price: 501, type: 'sneaker' },
  { name: 'Utility Boots', price: 20, type: 'boot' },
  { name: 'Velcro Sandals', price: 15, type: 'sandal' },
  { name: 'Jet Boots', price: 1000, type: 'boot' },
  { name: 'Fifty-Inch Heels', price: 175, type: 'heel' }
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

//task3
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

//task4
app.get('/shoes', (req, res) => {
  const minPrice = req.query.minPrice
  const maxPrice = req.query.maxPrice
  const type = req.query.type

  let filteredShoes = shoes

  if (minPrice) {
    filteredShoes = filteredShoes.filter(
      (shoe) => shoe.price >= parseInt(minPrice)
    )
  }

  if (maxPrice) {
    filteredShoes = filteredShoes.filter(
      (shoe) => shoe.price <= parseInt(maxPrice)
    )
  }

  if (type) {
    filteredShoes = filteredShoes.filter((shoe) => shoe.type === type)
  }

  res.send(filteredShoes)
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
