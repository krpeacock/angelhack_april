
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', function(table) {
    table.increments();
    table.string('name');
    table.date('shelf_life');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ingredients');
};
