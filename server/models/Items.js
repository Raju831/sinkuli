const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model.bind(mongoose)
const ObjectId = mongoose.Schema.Types.ObjectId

const mobile2 = Schema({
       id: ObjectId,
       name:String,
       age:Number
})






const Mobile2 = model('Mobile2', mobile2)

module.exports = {Mobile2}