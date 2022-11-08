const { HttpError } = require("./errorHandlers")

const auth = (req, res, next) => {
    const authorization = req.headers.authorization

    if (!authorization) {
        throw new HttpError(400, 'Missing auth token')
    }

    const token = authorization && authorization.split(' ')[1]

    if (!token) {
        throw new HttpError(400, 'Invalid token')
    }
}

module.exports = { auth }