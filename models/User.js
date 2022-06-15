/* Модель данных пользователя */ 
const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    login: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    links: [{type: Types.ObjectId, ref: 'Link'}]
})

module.exports = model('User', schema)