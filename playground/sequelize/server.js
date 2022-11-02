require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const { initDB } = require('./utils/database')
const HttpError = require('./utils/error')

initDB()

app.use(express.json())
app.use('/api/cheese', require('./routes/cheese.routes'))
app.use('/api/review', require('./routes/review.routes'))

app.use((req, res, next) => {
    if (!res.returnValue) {
        return next(new HttpError(404, 'Not found'))
    }
    
    return res.status(200).json(res.returnValue)
})

app.use((error, req, res, next) => {
    if (error.statusCode && error.statusCode != 500) {
        return res.status(error.statusCode).json({ error: error.message })
    } else {
        console.error(error)
        return res.status(500).json({ error: 'Server error' })
    }
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))