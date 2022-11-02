const HttpError = require('../utils/error')
const Review = require('../models/review.model')
const Cheese = require('../models/cheese.model')

exports.create = (req, res, next) => {
    if (!req.body.cheeseId) {
        console.log('fail')
        return next(new HttpError(400, 'Missing cheeseId'))
    }

    const cheese = Cheese.findOne({ where: {
        cheeseId: req.body.cheeseId
    } })
    .then((cheese) => {
        console.log(cheese)
    })
    .catch((err) => {
        return next(err)
    })
}

exports.findAll = (req, res, next) => {
    //const condition = null
    //Review.findAll({ where: condition })
}