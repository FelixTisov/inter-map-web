/* API для авторизации пользователя */ 
const { Router } = require('express')
const router = Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const User = require('../models/User') // Модель пользователя

/* '/api/auth/register' - регистрация нового пользователя */
router.post('/register', async (request, response) => {
    try {

        // console.log('Body: ', request.body)

        const {login, password} = request.body

        const candidate = await User.findOne({login}) // Существует ли уже такой пользователь

        if(candidate) {
            return response.status(400).json({message: 'This user already exists'})
        }

        const hashedPassword = await bcrypt.hash(password, 12) // Шифрование пароля
        const user = new User({login, password: hashedPassword})

        await user.save() // Создание пользователя

        response.status(201).json({message: 'User has been created!'})

    } catch (error) {
        response.status(500).json({ message: 'Something went wrong... Try again'})
    }
})

/* '/api/auth/login' - авторизация пользователя */
router.post('/login', async (request, response) => {
    try {
        
        console.log('Body: ', request.body)

        const {login, password} = request.body

        const user = await User.findOne({login}) // Существует ли уже такой пользователь

        if(!user) {
            return response.status(400).json({message: "User was not found"})
        }

        const isMatch = await bcrypt.compare(password, user.password) // Сравнение пароля

        if(!isMatch) {
            return response.status(400).json({ message: 'Password is incorrect'})
        }

        const token = jwt.sign( // Создание токена авторизации
            {userId: user.id},
            config.get('jwtSecret'),
            {expiresIn: '1h'}
        )

        response.json({token, UserId: user.id})

    } catch (error) {
        response.status(500).json({ message: 'Something went wrong... Try again'})
    }
})

module.exports = router