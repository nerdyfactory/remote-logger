const express = require('express') // eslint-disable-line no-undef
const bodyParser = require('body-parser') // eslint-disable-line no-undef

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/', function (req, res) {
  console.log(req.body) // eslint-disable-line no-undef
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!') // eslint-disable-line no-undef
})
