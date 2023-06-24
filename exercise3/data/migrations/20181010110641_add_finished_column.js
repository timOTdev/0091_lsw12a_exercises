exports.up = function(knex, Promise) {
  return knex.schema.table('courses', function(tbl) {
    tbl.boolean('finished').defaultTo(0);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('courses', function(tbl) {
    tbl.dropColumn('finished');
  });
};
