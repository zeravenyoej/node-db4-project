const express = require("express");
const router = express.Router()
const rec = require('./recipesHelper')

// get list of recipes
router.get('/', async (req, res, next) =>{
    try {
        const recipes = await rec.getRecipes()
        res.json(recipes)
    } catch(err) {
        next(err)
    }
})

// find a recipe by Id
router.get('/:id', async (req, res, next) =>{
    try {
        const { id } = req.params
        const recipe = await rec.findRecipe(id)
        if (recipe) {
            res.json(recipe)
        } else {
            res.status(404).json({message: 'Could not find a recipe with the specified id'})
        }
    } catch(err) {
        next(err)
    }
})


// get a shopping list (ingredient and amount) by recipe Id
router.get('/:id/shoppinglist', async (req, res, next) =>{
    try {
        const { id } = req.params
        const sl = await rec.getShoppingList(id)
        res.json(sl)
    } catch(err) {
        next(err)
    }
})

//get instructions by recipe id
router.get('/:id/instructions', async (req, res, next) => {
    try {
        const { id } = req.params
        const instr = await rec.getInstructions(id)
        res.json(instr)
    } catch(err){
        next(err)
    }
})




module.exports = router