const localStrategy = require('passport-local').Strategy

function initialize(passport) {
    const authenticateUser = (email, password, done) => {
        const user = getUserByEmail(email);

        if (user == null) {
            return done(null, false, { message: 'Felaktiga inloggningsuppgifter' });
        }

        if (password != user.password) {
            return done(null, false, { message: 'Felaktiga inloggningsuppgifter' });
        }

        return done(null, user);
    }

    passport.use(new localStrategy({ usernameField: 'email' }, authenticateUser))
    passport.serializeUser((user, done) => { })
    passport.deserializeUser((id, done) => { })
}

module.exports = initialize