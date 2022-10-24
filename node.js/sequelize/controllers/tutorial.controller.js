const db = require('../models')
const Tutorial = db.tutorials
const Op = db.Sequelize.Op
const HttpError = require('../utils/error')

exports.create = (req, res) => {
  if (!req.body.title) {
    throw new HttpError(400, 'Title cannot be empty')
  }

  const tutorial = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published || false
  }

  Tutorial.create(tutorial)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      throw new HttpError(500, err.message)
    })
}

exports.findAll = (req, res) => {
  const title = req.body.title
  const condition = title ? { title: { [Op.like]: `%${title}%` } } : null

  Tutorial.findAll({ where: condition })
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      throw new HttpError(500, err.message)
    })
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
