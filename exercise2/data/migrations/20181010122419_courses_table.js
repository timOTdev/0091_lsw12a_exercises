exports.up = function(knex, Promise) {
  return knex.schema.createTable('courses', function(tbl) {
    // primary key called id
    tbl.increments(); // by default, creates an id field that auto increments

    tbl.string('name', 255).notNullable(); // adds a string field called named, size of field, and make not null
  })
}

exports.down = function(knex, Promise) {
  // rollback
  return knex.schema.dropTableIfExists('courses');
}
