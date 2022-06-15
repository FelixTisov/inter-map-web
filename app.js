const express =  require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()
app.use(express.json({ extended: true }))

/* API для работы с БД */ 
app.use('/api/auth', require('./routes/auth.routes')) // Авторизация пользователя
app.use('/api/data', require('./routes/data.routes')) // Работа с данными для объектов

const PORT = config.get('port')

async function start() {
    try {
        await mongoose.connect(config.get('mongoURI'))
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}`)) // Запускаем сервер
    } catch (error) {
        console.log('Server error', error.message)
        process.exit(1)
    }
}

start()

