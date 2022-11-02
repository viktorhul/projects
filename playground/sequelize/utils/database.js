const { sequelize } = require('../config/database')

function initDB() {
    sequelize.authenticate()
        .then(() => {
            console.log('Connected to DB')
            sequelize.sync({ force: process.env.NODE_ENV == 'dev' })
        })

        .catch((err) => {
            console.error(err)
            process.exit(1)
        })
}
module.exports = { initDB }