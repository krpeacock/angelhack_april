
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe_uses_ingredient', function(table) {
    table.integer('recipe_id').unsigned().references('id').inTable('recipes').onDelete('cascade');
    table.increments();
    table.decimal('quantity');
    table.string('quantity_units');
    table.integer('ingredient_id').unsigned().references('id').inTable('ingredients').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipe_uses_ingredient');
};
