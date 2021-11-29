const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.get('/goodbye', (req, res) => {
    res.send('Good bye worl!')
  })
app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`)
})
