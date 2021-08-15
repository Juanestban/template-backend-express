const mongoose = require('mongoose')

mongoose
  .connect('', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log('mongoDB is connected'))
  .catch((err) =>
    console.error("hasn't can connect to mongodb", { tracer: err })
  )

module.exports = mongoose
