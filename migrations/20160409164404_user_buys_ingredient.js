
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_buys_ingredient', function(table) {
    table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade');
    table.increments();
    table.decimal('quantity');
    table.string('quantity_units');
    table.date('date');
    table.integer('ingredient_id').unsigned().references('id').inTable('ingredients').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_buys_ingredient');
};
