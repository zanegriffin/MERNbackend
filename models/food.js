const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const foodSchema = new Schema (
    {
        name: String,
        list: String,
    }
)

const Food = mongoose.model('Food', foodSchema)

module.exports = Food