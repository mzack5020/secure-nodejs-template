const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const config = require('./config.json')
const app = express()

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static(path.join(__dirname, 'public')))
app.use('/templates', express.static(path.join(__dirname, '/public/templates/')))
app.use('/assets', express.static(path.join(__dirname, '/public/assets/')))
app.use('/global', express.static(path.join(__dirname, '/public/global/')))
app.use('/scripts', express.static(path.join(__dirname, '/node_modules/')))
app.use(require('./routes/public-routes'))
app.use(require('./routes/secure-routes'))

app.listen(config.express.port, () => console.log(`Express router up on port ${config.express.port}`))