module.exports = (sequelize, Sequelize) => {
  const Cheese = sequelize.define("cheese", {
    id: {
      type: Sequelize.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
  })

  return Cheese
}