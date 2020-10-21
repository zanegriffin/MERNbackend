const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const categorySchema = new Schema (
    {
        name: String,
        img: String,
        amount: String,
        foods: ['Food']
    }
)

const Category = mongoose.model('Category', categorySchema)

module.exports = Category