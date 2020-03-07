const db = require('../data/config');

module.exports = {
    getIngr, 
    getRecipesByIng
}

function getIngr(){
    return db("Ingredients")
}

function getRecipesByIng(id){
    return db("Recipes_Ingredients as ri")
        .join("Recipes as r", "r.Id", "ri.Recipe_Id")
        .join("Ingredients as i", "i.Id", "ri.Ingredient_Id")
        .where({Ingredient_Id: id})
        .select("r.Name")
}