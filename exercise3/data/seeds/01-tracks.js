exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tracks')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('tracks').insert([
        { name: 'Machine Learning' },
        { name: 'Computer Science' },
        { name: 'Web Development' },
      ]);
    });
};
