exports.up = function(knex, Promise) {
  return knex.schema.table('courses', function(courses) {
    courses.boolean('finished').defaultTo(0);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('courses', function(courses) {
    courses.dropColumn('finished');
  })
};