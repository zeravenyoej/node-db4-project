const express = require("express");
const router = express.Router()
const ingHelp = require('./ingredientsHelper')

//get all ingredients
router.get('/', async (req, res, next) => {
    try {
        const ing = await ingHelp.getIngr()
        res.json(ing)
    } catch(err){
        next(err)
    }
})

//get all recipes that utilize an ingredient
router.get('/:id/recipes', async (req, res, next) => {
    try {
        const { id } = req.params
        const recipes = await ingHelp.getRecipesByIng(id)
        res.json(recipes)
    } catch(err){
        next(err)
    }
})

module.exports = router