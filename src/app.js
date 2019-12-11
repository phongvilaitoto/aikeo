const express = require('express')
const app = express()
const BodyParser = require('body-parser')
const jsonParser = BodyParser.json()
const urlencodedParser = BodyParser.urlencoded({ extended: false }) // use for form input
const cors = require('cors') // require cors to connect vue.js
require('./plugins/mongodb') // requrie mongodb

// middleware
app.use(cors()) // use cors
app.use(jsonParser) // use jsonpParser to read json
app.use(urlencodedParser) // use urlendcoded
// app.use(express.static('public',  { dotfiles: 'allow' })) // use public image

// Routes
app.use('/auth', require('./routes/api/auth'))
app.use('/user', require('./routes/api/user'))


// render index Vue js

module.exports = app
