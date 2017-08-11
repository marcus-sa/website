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

  const project = Object.assign({},
    config.projects[id], {
    prev: id - 1,
    next: Number(id) + 1
  })

  res.render('partials/project', project)
})

app.listen(process.env.PORT || 3000)
