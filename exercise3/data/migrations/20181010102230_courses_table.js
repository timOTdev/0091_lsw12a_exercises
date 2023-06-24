exports.up = function(knex, Promise) {
  return knex.schema.createTable('courses', function(tbl) {
    // primary key called id
    tbl.increments(); // by default creates and id field that autoincrements

    tbl.string('name', 255).notNullable();
    tbl
      .integer('track_id')
      .unsigned()
      .references('id')
      .inTable('tracks');
  });
};

exports.down = function(knex, Promise) {
  // rollback
  return knex.schema.dropTableIfExists('courses');
};
