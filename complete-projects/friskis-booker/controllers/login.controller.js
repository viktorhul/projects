const passport = require('passport');
const { HttpError } = require("../utils/errorHandlers")

/*
exports.login = (req, res, next) => {
    const { username, password } = req.body

    if (!username || !password) {
        return res.render('login', { error: 'Användarnamn eller lösenord saknas', username })
    }

    const user = users.find((user) => username == user.username && password == user.password)

    if (!user) {
        return res.render('login', { error: 'Fel inloggningsuppgifter', username })
    }

    return res.render('index')
}*/

exports.login = passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
})

exports.loadForm = (req, res) => {
    res.render('login');
}