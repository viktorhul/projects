const { Op } = require('sequelize')
const HttpError = require('../utils/error')
const Cheese = require('../models/cheese.model')

exports.create = (req, res, next) => {
    if (!req.body.name) {
        return next(new HttpError(400, 'Missing name'))
    }

    Cheese.create(req.body)
        .then((dbRes) => {
            res.returnValue = {
                id: dbRes.id,
                name: dbRes.name,
                createdAt: dbRes.createdAt
            }

            return next()
        })
        .catch((err) => {
            return next(err)
        })
}

exports.findAll = (req, res, next) => {
    const name = req.body.name
    const condition = name
        ? { name: { [Op.like]: `%${name}%` } }
        : null
    Cheese.findAll({ where: condition })
        .then((dbRes) => {
            res.returnValue = dbRes.map((item) => ({
                id: item.id,
                name: item.name,
                createdAt: item.createdAt,
                updatedAt: item.updatedAt
            }))

            return next()
        })
        .catch((err) => {
            return next(err)
        })
}