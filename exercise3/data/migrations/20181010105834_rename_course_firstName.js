exports.up = function(knex, Promise) {
  return knex.schema.table('courses', function(courses) {
    courses.renameColumn('firstName', 'name');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('courses', function(courses) {
    courses.renameColumn('name', 'firstName');
  });
};
