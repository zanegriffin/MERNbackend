const express = require('express')
const router = express.Router()
const Food = require('../models/food')
const Category = require('../models/category')
const { findByIdAndUpdate } = require('../models/category')

//get all
router.get('/', async (req, res) => {
    res.json(await Food.find())
})

//get one by name
router.get('/:name', async (req, res) => {
    res.json(await Food.find({name: req.params.name}))
})

//make a food
router.post('/:categoryid', async (req, res) => {
    let food = await Food.create(req.body)
    let category = await Category.findByIdAndUpdate(req.params.categoryid, {$push: {foods: food}}, {new:true})
    res.json({status: 200, category})
})

//update a food
router.put('/:foodid', async (req, res) => {
    let food = await Food.findByIdAndUpdate(req.params.foodid, req.body, {new:true})
    res.json({ 
        status: 200,
        data: food
    })
})

//delete a food
router.delete('/:id', async (req, res) => {
    res.json(await Food.findByIdAndDelete(req.params.id))
})

module.exports = router