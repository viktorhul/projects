const router = require('express').Router()
const cheese = require('../controllers/cheese.controller')

router.get('/', cheese.findAll)
router.post('/', cheese.create)

module.exports = router