
exports.up = async function(knex) {
    await knex.schema.createTable("Recipes", table => {
        table.increments("Id")
        table.string("Name").notNullable().unique()
    });

    await knex.schema.createTable("Ingredients", table => {
        table.increments("Id")
        table.string("Name").notNullable()
        table.integer("Quantity").notNullable()
    })

    await knex.schema.createTable("Instructions", table => {
        table.increments("Id")
        table.string("Instruction").notNullable()
        table.integer("Step_number").notNullable()
        table.integer("Recipe_Id")
            .references("Id")
            .inTable("Recipes")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
    })

    await knex.schema.createTable("Recipes_Ingredients", table => {
        table.integer("Recipe_Id")
            .references("Id")
            .inTable("Recipes")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        table.integer("Ingredient_Id")
            .references("Id")
            .inTable("Ingredients")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        table.primary(["Recipe_Id", "Ingredient_Id"])
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("Recipes_Ingredients")
    await knex.schema.dropTableIfExists("Instructions")
    await knex.schema.dropTableIfExists("Ingredients")
    await knex.schema.dropTableIfExists("Recipes")
};
