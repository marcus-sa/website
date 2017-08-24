const express = require('express')
const path = require('path')
const config = require('./config')

const app = express()

app.use(express.static(path.join(__dirname, 'static')))

app.set('view engine', 'ejs')
app.set('view cache', false)

app.get('/', (req, res) => {
  res.render('index', config)
})

app.get('/project/:name', (req, res) => {
  const {name} = req.params

  res.render('partials/project', config.projects[name])
})

app.listen(process.env.PORT || 3000)
