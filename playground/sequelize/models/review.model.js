const { sequelize, Sequelize } = require('../config/database')
const Cheese = require('./cheese.model')

const Review = sequelize.define('Review', {
    reviewId: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    description: {
        type: Sequelize.STRING
    }
})

Review.belongsTo(Cheese, {
    through: 'Cheese',
    foreignKey: 'cheeseId'
})

module.exports = Review