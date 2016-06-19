exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', table=>{
    table.increments();
    table.text('content');
    table.integer('blog_id').unsigned().index().notNullable().references('blogs.id').onDelete('CASCADE');
  });  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
