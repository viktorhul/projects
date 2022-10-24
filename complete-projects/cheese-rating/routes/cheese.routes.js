module.exports = (app) => {
  const cheese = require('../controllers/cheese.controller')
  const router = require('express').Router()

  router.post('/', cheese.create)
  router.get('/', cheese.findAll)

  app.use('/api/cheese', router)
}