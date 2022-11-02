const router = require('express').Router()
const review = require('../controllers/review.controller')

router.get('/', review.findAll)
router.post('/', review.create)

module.exports = router