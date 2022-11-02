const express = require('express')
const app = express()
const HttpError = require('./utils/error')

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

const db = require('./models')
db.sequelize.sync()
  .then(() => {
    console.log('synced db')
  })
  .catch((err) => {
    console.log('failed to sync db: ' + err)
  })

app.use(express.json())

require('./routes/cheese.routes')(app)

app.get('/', (req, res) => {
  return res.json({ ok: true })
})

app.use((req, res, next) => {
  next(new HttpError(404, 'Not found'))
})

app.use((error, req, res, next) => {
  if (error.statusCode && error.statusCode != 500) {
    return res.status(error.statusCode).json({ error: error.message })
  } else {
    console.error(error)
    return res.status(500).json({ error: 'Server error' })
  }
})