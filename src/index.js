const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
require('./mongoose')

// Initializer
const app = express()

// Settings
app.set('port', process.env.PORT || 3200)

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('dev'))

// Routes

// Starting server
app.listen(app.get('port'), () => {
  console.log('shorten-url | [+] listen on port:', app.get('port'))
})
