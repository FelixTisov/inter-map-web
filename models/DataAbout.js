/* Модель данных для карточки с описанием */ 
const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    buildingId: {type: String, required: true, unicue: true}, // Номер здания
    image: {type: Object},
    cardName: {type: String, required: true},
    date: {type: String, required: true},
    description: {type: String, required: true},
})

module.exports = model('DataAbout', schema)