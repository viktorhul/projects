const { sequelize, Sequelize } = require('../config/database')

const Cheese = sequelize.define('Cheese', {
    cheeseId: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Cheese