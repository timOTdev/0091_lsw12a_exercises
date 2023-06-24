exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('courses')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('courses').insert([
        { name: 'Patrick', finished: true, track_id: 3 }, // 1
        { name: 'Michelle', finished: false, track_id: 3 }, // 2
        { name: 'Brock', finished: false, track_id: 3 }, // 3
      ]);
    });
};