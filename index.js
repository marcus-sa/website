const express = require('express')
const path = require('path')
const config = require('./config')

const app = express()

app.use(express.static(path.join(__dirname, 'static')))

app.set('view engine', 'ejs')

app.get('*', (req, res) => {
  res.render('index', config)
})

app.listen(8080, console.log)
