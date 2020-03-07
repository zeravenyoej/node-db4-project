
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('Instructions').insert([
        {
          Instruction: 'Make cake batter',
          Step_number: 1,
          Recipe_Id: 1 
        },
        {
          Instruction: 'Bake cake batter at 400 degrees for 1 hour',
          Step_number: 2,
          Recipe_Id: 1 
        },
        {
          Instruction: 'Add whipped cream on top of cake and enjoy!',
          Step_number: 3,
          Recipe_Id: 1 
        },
        {
          Instruction: 'Make brownie batter',
          Step_number: 1,
          Recipe_Id: 2 
        },
        {
          Instruction: 'Bake brownies at 350 degrees for 30 min and enjoy!',
          Step_number: 2,
          Recipe_Id: 2 
        },
        {
          Instruction: 'Pour ingredients into a blender',
          Step_number: 1,
          Recipe_Id: 3 
        },
        {
          Instruction: 'Blend for 30 seconds, and then enjoy!',
          Step_number: 2,
          Recipe_Id: 3 
        },
        {
          Instruction: 'Chop ingredients',
          Step_number: 1,
          Recipe_Id: 4 
        },
        {
          Instruction: 'Boil broth and then add ingredients',
          Step_number: 2,
          Recipe_Id: 4 
        },
        {
          Instruction: 'Stir soup off and on until thick. Then enjoy!',
          Step_number: 3,
          Recipe_Id: 4 
        },
      ]);
    });
};
