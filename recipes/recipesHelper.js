const db = require('../data/config');

module.exports = {
    getRecipes,
    findRecipe,
    getShoppingList, 
    getInstructions
}

function getRecipes() {
    return db("Recipes")
}

function findRecipe(id){
    return db("Recipes")
        .where({id})
        .first()
} 

function getShoppingList(id){
    return db("Recipes_Ingredients as ri")
        .join("Recipes as r", "r.Id", "ri.Recipe_Id")
        .join("Ingredients as i", "i.Id", "ri.Ingredient_Id")
        .where("r.Id", id)
        .select("i.Name", "i.Quantity")
}

function getInstructions(id){
    return db("Instructions")
        .where({Recipe_id: id})
        .select("Instruction", "Step_number")
        .orderBy("Step_number")
}