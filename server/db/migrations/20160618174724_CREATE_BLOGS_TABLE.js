exports.up = function(knex, Promise) {
  return knex.schema.createTable('blogs', table=>{
    table.increments();
    table.string('title');
    table.string('image_url');
    table.string('author');
    table.date('date');
    table.integer('votes');
  });  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('blogs');
};
