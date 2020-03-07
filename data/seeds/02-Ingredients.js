
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('Ingredients').insert([
        {Name: 'Carrots', Quantity: 4},
        {Name: 'Raisins', Quantity: 24},
        {Name: 'Ginger', Quantity: 1},
        {Name: 'Can of whipped cream', Quantity: 1},
        {Name: 'Stick of butter', Quantity: 1},
        {Name: 'Scoop of fudge', Quantity: 1},
        {Name: 'Bag of chocolate chips', Quantity: 2},
        {Name: 'Carton of milk', Quantity: 1},
        {Name: 'Scoops of ice cream', Quantity: 3},
        {Name: 'Bags of frozen fruit', Quantity: 2},
        {Name: 'Bags of frozen corn', Quantity: 1},
        {Name: 'Chicken breast', Quantity: 2},
        {Name: 'Bag of noodles', Quantity: 1},
        {Name: 'Box of chicken broth', Quantity: 1}
      ]);
    });
};
