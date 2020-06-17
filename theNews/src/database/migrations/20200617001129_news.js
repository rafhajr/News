
exports.up = function(knex) {
  return knex.schema.createTable('news', function(table) {
    table.increments();

    table.string('title').notNullable();
    table.string('news').notNullable();

    table.string('author_id').notNullable

    table.foreign('author_id').references('id').inTable('authors')
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('news')
};
