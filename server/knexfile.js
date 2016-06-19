module.exports = {
  development: {
    client: 'pg',
    debug: true,
    connection: {database: 'angular_blog_app'},
    migrations: {directory: './db/migrations'},
    seeds: {directory: './db/seeds'}
  }
}