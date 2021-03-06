const express = require('express')
const router = express.Router()
const Category = require('../models/category')

//get all
router.get('/', async (req, res) => {
    res.json(await Category.find().populate('foods'))
})

//get one by id
router.get('/:id', async (req, res) => {
    res.json(await Category.findById(req.params.id))
})

//make a category
router.post('/', async (req, res) => {
    res.json(await Category.create(req.body))
})

//update a category
router.put('/:id', async (req, res) => {
    res.json(await Category.findByIdAndUpdate(req.params.id, req.body, {new:true}))
})

//delete a category
router.delete('/:id', async (req, res) => {
    res.json(await Category.findByIdAndDelete(req.params.id))
})

module.exports = router