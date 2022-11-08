require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const ejs = require('ejs');
const passport = require('passport');
const flash = require('express-flash')
const session = require('express-session')

const users = [
    {
        email: 'viktor',
        password: 'abc123'
    }
]

require('./passport-config')(
    passport,
    email => users.find(user => user.email === email)
);


const { notFoundHandler, errorHandler } = require('./utils/errorHandlers');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

(async () => {
    try {
        ['book', 'login'].forEach((route) => {
            app.use(`/${route}`, require(`./routes/${route}.routes`));
        });

        app.get('/', (req, res) => {
            res.redirect('/login');
        })

        app.use(notFoundHandler);
        app.use(errorHandler);

        app.listen(PORT);
        console.log(`Server running on http://localhost:${PORT}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();