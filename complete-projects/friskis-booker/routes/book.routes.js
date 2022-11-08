const book = require('../controllers/book.controller')
const router = require('express').Router()

router.post('/:id', book.create)

module.exports = router