const express = require('express')
const router = express.Router()
const Food = require('../models/food')

//get all
router.get('/', async (req, res) => {
    res.json(await Food.find())
})

//get one by name
router.get('/:name', async (req, res) => {
    res.json(await Food.find({name: req.params.name}))
})

//make a category
router.post('/', async (req, res) => {
    res.json(await Food.create(req.body))
})

//update a category
router.put('/:name', async (req, res) => {
    res.json(await Food.findOneAndUpdate({name: req.params.name}, req.body, {new:true}))
})

//delete a category
router.delete('/:name', async (req, res) => {
    res.json(await Food.findOneAndDelete({name: req.params.name}))
})

module.exports = router