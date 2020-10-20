const express = require('express')
const router = express.Router()
const Category = require('../models/category')
const Food = require('../models/food')

router.get('/', async(req, res) => {
    await Category.find({}).deleteMany()
    await Category.find({}).deleteMany()
    await Category.create({
        name: "Proteins",
        img: "",
        amount: "20%",
        }).then(category => {
        Promise.all([
            Food.create({
                name: "Seafood",
                list: "Salmon, Trout, Cod"
            }).then(food => {
                category.foods.push(food)
            }),
            Food.create({
                name: "Poultry",
                list: "Chicken, Turkey, Duck"
            }).then(food => {
                category.foods.push(food)
            }),
            Food.create({
                name: "Nuts",
                list: "Cashews, Peanuts, Almonds"
            }).then(food => {
                category.foods.push(food)
            })
        ]).then(() => {
            console.log(category.foods)
            category.save()
            })
        })
    await Category.create({
        name: "Fruits",
        img: "",
        amount: "10%",
        }).then(category => {
        Promise.all([
            Food.create({
                name: "Berries",
                list: "Strawberry, Blueberry, Raspberry"
            }).then(food => {
                category.foods.push(food)
            }),
            Food.create({
                name: "Citrus",
                list: "Lemon, Lime, Orange"
            }).then(food => {
                category.foods.push(food)
            }),
            Food.create({
                name: "Melons",
                list: "Watermelon, Honeydew, Cantaloupe"
            }).then(food => {
                category.foods.push(food)
            })
        ]).then(() => {
            console.log(category.foods)
            category.save()
        })
        })
    await Category.create({
        name: "Vegetables",
        img: "",
        amount: "40%",
        }).then(category => {
        Promise.all([
            Food.create({
                name: "Green Veggies",
                list: "Spinach, Broccoli, Kale"
            }).then(food => {
                category.foods.push(food)
            }),
            Food.create({
                name: "Starchy Veggies",
                list: "Potatoes, Taro, Parsnips"
            }).then(food => {
                category.foods.push(food)
            }),
            Food.create({
                name: "Beans",
                list: "Kidney, Pinto, Soy"
            }).then(food => {
                category.foods.push(food)
            })
        ]).then(() => {
            console.log(category.foods)
            category.save()
        })
        })
    await Category.create({
        name: "Dairy",
        img: "",
        amount: "2 to 3 cups",
        }).then(category => {
        Promise.all([
            Food.create({
                name: "Cheese",
                list: "Cheddar, Mozzerella, Asiago"
            }).then(food => {
                category.foods.push(food)
            }),
            Food.create({
                name: "Milk",
                list: "Soy, Whole, Non-Fat"
            }).then(food => {
                category.foods.push(food)
            }),
            Food.create({
                name: "Yogurt",
                list: "Regular, Greek, Soy"
            }).then(food => {
                category.foods.push(food)
            })
        ]).then(() => {
            console.log(category.foods)
            category.save()
        })
    })
    await Category.create({
        name: "Grains",
        img: "",
        amount: "30%",
    }).then(category => {
        Promise.all([
            Food.create({
                name: "Whole Grains",
                list: "Whole-Wheat Flour, Bulgur, Oatmeal"
            }).then(food => {
                category.foods.push(food)
            }),
            Food.create({
                name: "Refined Grain",
                list: "White Flour, Rice, Cornmeal"
            }).then(food => {
                category.foods.push(food)
            }),
        ]).then(() => {
            console.log(category.foods)
            category.save()
        })
    })
    
    res.json({status: 200, seed: "complete"})
})

Category.find({}).deleteMany(() => {
    Food.find({}).deleteMany(() => {
        Category.create({
            name: "Proteins",
            img: "",
            amount: "20%",
        }).then(category => {
            Promise.all([
                Food.create({
                    name: "Seafood",
                    list: "Salmon, Trout, Cod"
                }).then(food => {
                    category.foods.push(food)
                }),
                Food.create({
                    name: "Poultry",
                    list: "Chicken, Turkey, Duck"
                }).then(food => {
                    category.foods.push(food)
                }),
                Food.create({
                    name: "Nuts",
                    list: "Cashews, Peanuts, Almonds"
                }).then(food => {
                    category.foods.push(food)
                })
            ]).then(() => {
                console.log(category.foods)
                category.save()
            })
        })
        Category.create({
            name: "Fruits",
            img: "",
            amount: "10%",
        }).then(category => {
            Promise.all([
                Food.create({
                    name: "Berries",
                    list: "Strawberry, Blueberry, Raspberry"
                }).then(food => {
                    category.foods.push(food)
                }),
                Food.create({
                    name: "Citrus",
                    list: "Lemon, Lime, Orange"
                }).then(food => {
                    category.foods.push(food)
                }),
                Food.create({
                    name: "Melons",
                    list: "Watermelon, Honeydew, Cantaloupe"
                }).then(food => {
                    category.foods.push(food)
                })
            ]).then(() => {
                console.log(category.foods)
                category.save()
            })
        })
        Category.create({
            name: "Grains",
            img: "",
            amount: "30%",
        }).then(category => {
            Promise.all([
                Food.create({
                    name: "Whole Grains",
                    list: "Whole-Wheat Flour, Bulgur, Oatmeal"
                }).then(food => {
                    category.foods.push(food)
                }),
                Food.create({
                    name: "Refined Grain",
                    list: "White Flour, Rice, Cornmeal"
                }).then(food => {
                    category.foods.push(food)
                }),
            ]).then(() => {
                console.log(category.foods)
                category.save()
            })
        })
    })
})

module.exports = router