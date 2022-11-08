class HttpError extends Error {
    constructor(statusCode, message) {
        super(message)
        this.statusCode = statusCode
    }
}

const notFoundHandler = (req, res, next) => {
    return next(new HttpError(404, 'Sidan kunde inte hittas'))
}

const errorHandler = (error, req, res, next) => {
    if (false === (error instanceof HttpError)) {
        console.error(error)
        return res.render('error', {
            data: {
                errorCode: 500,
                message: 'Något gick snett på servern'
            }
        })
        return res.status(500).json({ error: 'Server error' })
    }

    return res.render('error', {
        errorCode: error.statusCode,
        message: error.message
    })

    return res.status(error.statusCode).json({ error: error.message })
}


module.exports = { HttpError, notFoundHandler, errorHandler }