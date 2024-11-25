const express = require('express')
const app = express()

app.get('/greetings/:name', (req, res) => {
  res.send(`<h1>Hello there,${req.params.name} </h1>`)
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
