import { Module } from '@nestjs/common';
import { localConf } from './config/database.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './routes/auth/auth.module';
import { UsersModule } from './routes/users/users.module';
import { AdvertModule } from './routes/advert/advert.module';

@Module({
  imports: [AuthModule, TypeOrmModule.forRoot(localConf), UsersModule, AdvertModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
