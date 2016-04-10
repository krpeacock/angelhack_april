
exports.up = function(knex, Promise) {
  return knex.schema.createTable('receipts', function(table) {
    table.increments();
    table.string('store_name');
    table.date('date');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('receipts');
};