const login = require('../controllers/login.controller')
const router = require('express').Router()
const { auth } = require('../utils/auth')

router.post('/', login.login)
router.get('/', login.loadForm) // TODO: Add authentication

module.exports = router