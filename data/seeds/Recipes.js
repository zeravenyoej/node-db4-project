
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('Recipes').insert([
        {Name: 'Carrot Cake'},
        {Name: 'Brownies'},
        {Name: 'Milkshake'},
        {Name: 'Tortilla Soup'}
      ]);
    });
};
