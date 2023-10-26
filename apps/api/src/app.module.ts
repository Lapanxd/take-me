import { Module } from '@nestjs/common';
import { localConf } from './config/database.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AdvertModule } from './advert/advert.module';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot(localConf),
    UsersModule,
    AdvertModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
