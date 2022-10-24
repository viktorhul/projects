module.exports = (sequelize, Sequelize) => {
  const Cheese = sequelize.define("cheese", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  })

  return Cheese
}