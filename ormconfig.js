module.exports = {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  autoLoadEntities: true,
  entities: ['dist/entities/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
      entitiesDir: 'src/entities',
      migrationsDir: 'src/migrations',
  },
  // TODO 2022/09/27: 本番環境では推奨されていない。暫定対応
  synchronize: true,
};