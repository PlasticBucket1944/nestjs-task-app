import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      // envFilePath: [`env/${process.env.NODE_ENV}.env`],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
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
    }),
    TasksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
