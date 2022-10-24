const db = require('../models')
const Cheese = db.cheese
const Op = db.Sequelize.Op
const HttpError = require('../utils/error')

exports.create = (req, res) => {
  if (!req.body.title) {
    throw new HttpError(400, 'Title cannot be empty')
  }

  const cheese = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published || false
  }

  Cheese.create(cheese)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      throw new HttpError(500, err.message)
    })
}

exports.findAll = (req, res) => {

}

exports.findOne = (req, res) => {

}

exports.update = (req, res) => {

}

exports.delete = (req, res) => {

}

exports.deleteAll = (req, res) => {

}

exports.findAllPublished = (req, res) => {

}
