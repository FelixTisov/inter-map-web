/* API для работы с данными объектов */ 
const {Router} = require('express')
const DataAbout = require('../models/DataAbout')
const router = Router()

/* '/api/data/create' - создание данных для одной карточки */ 
router.post('/create', async (request, response) => {
    try {
        
        const {buildingId, image, cardName, date, description} = request.body
        const candidate = await DataAbout.findOne({buildingId}) // Существует ли уже эта карточка

        if(candidate) {
            console.log('Error...')

            return response.status(400).json({message: 'This data has been already written'})
        } else {
            const data = new DataAbout({buildingId, image, cardName, date, description})
            await data.save() // Сохранение данных

            response.json(data)
        }
        
    } catch (error) {
        response.status(500).json({ message: 'Something went wrong... Try again'})
    }
})

/* '/api/data/cards' - получение данных всех карточек */ 
router.get('/cards', async (request, response) => {
    try {
        const dataAbout = await DataAbout.find()
        response.json(dataAbout)
    } catch (error) {
        response.status(400).json({ message: 'Data was not found'})
    }   
})

/* Получение данных конкретной карточки */ 
router.get('/card/:id', async (request, response) => {
    const dataAbout = await DataAbout.findById(request.params.id)
    response.json(dataAbout)
})

module.exports = router