const HttpError = require('../utils/error')
const Review = require('../models/review.model')

exports.create = (req, res, next) => {

}

exports.findAll = (req, res, next) => {
    const condition = null
    Review.findAll({ where: condition })
}