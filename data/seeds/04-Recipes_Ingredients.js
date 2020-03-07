
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Recipes_Ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('Recipes_Ingredients').insert([
        {Recipe_Id: 1, Ingredient_Id: 1},
        {Recipe_Id: 1, Ingredient_Id: 2},
        {Recipe_Id: 1, Ingredient_Id: 3},
        {Recipe_Id: 1, Ingredient_Id: 4},
        {Recipe_Id: 1, Ingredient_Id: 5},
        {Recipe_Id: 2, Ingredient_Id: 5},
        {Recipe_Id: 2, Ingredient_Id: 4},
        {Recipe_Id: 2, Ingredient_Id: 6},
        {Recipe_Id: 2, Ingredient_Id: 7},
        {Recipe_Id: 3, Ingredient_Id: 8},
        {Recipe_Id: 3, Ingredient_Id: 9},
        {Recipe_Id: 3, Ingredient_Id: 10},
        {Recipe_Id: 4, Ingredient_Id: 11},
        {Recipe_Id: 4, Ingredient_Id: 12},
        {Recipe_Id: 4, Ingredient_Id: 13},
        {Recipe_Id: 4, Ingredient_Id: 14},
        {Recipe_Id: 4, Ingredient_Id: 1}
      ]);
    });
};
