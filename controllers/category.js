const express = require('express')
const router = express.Router()
const Category = require('../models/category')

//get all
router.get('/', async (req, res) => {
    res.json(await Category.find().populate('foods'))
})

//get one by name
router.get('/:name', async (req, res) => {
    res.json(await Category.find({name: req.params.name}))
})

//make a category
router.post('/', async (req, res) => {
    res.json(await Category.create(req.body))
})

//update a category
router.put('/:name', async (req, res) => {
    res.json(await Category.findOneAndUpdate({name: req.params.name}, req.body, {new:true}))
})

//delete a category
router.delete('/:name', async (req, res) => {
    res.json(await Category.findOneAndDelete({name: req.params.name}))
})

module.exports = router