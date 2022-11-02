module.exports = (sequelize, Sequelize) => {
  const Cheese = require('./cheese.model')
  const CheesePhoto = sequelize.define("cheesePhoto", {
    id: {
      type: Sequelize.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    path: {
      type: Sequelize.STRING
    },
    cheeseId: {
      type: Sequelize.INTEGER.UNSIGNED,
      references: {
        model: Cheese,
        key: 'id'
      }
    },
  })

  return CheesePhoto
}