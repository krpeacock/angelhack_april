
exports.up = function(knex, Promise) {
  knex.schema.createTable('receipts', function(req,res){
    table.increments();
    table.string('name');
    table.string('store_name');
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('receipts');
};
