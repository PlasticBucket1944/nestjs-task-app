module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  autoLoadEntities: true,
  // entities: ['dist/entities/*.entity.js'],
  // entities: [__dirname + '/entities/*.js'],
  entities: [__dirname + '/entities/**/*.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
      entitiesDir: '../entities',
      migrationsDir: '../migrations',
  },
};