const express = require('express')
const path = require('path')
const config = require('./config')

const app = express()

app.use(express.static(path.join(__dirname, 'static')))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index', config)
})

app.get('/project/:id', (req, res) => {
  const {id} = req.params
  const i = config.projects.indexOf(id)

  res.render('project', {
    project: config.projects[id],
    prev: i - 1,
    next: i + 1
  })
})

app.listen(process.env.PORT || 3000)
