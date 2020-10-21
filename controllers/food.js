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

//make a food
router.post('/', async (req, res) => {
    res.json(await Food.create(req.body))
})

//update a food
router.put('/:id', async (req, res) => {
    res.json(await Food.findOneByIdAndUpdate(req.params.id, req.body, {new:true}))
})

//delete a food
router.delete('/:id', async (req, res) => {
    res.json(await Food.findOneByIdAndDelete(req.params.id))
})

module.exports = router