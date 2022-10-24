const Sequelize = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
})

const db = {
  Sequelize,
  sequelize
}

db.tutorials = require('./tutorials.model')(sequelize, Sequelize)

module.exports = db