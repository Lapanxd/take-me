import { Module } from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import { localConf } from './config/database.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './routes/auth/auth.module';
import { UsersModule } from './routes/users/users.module';
import { AdvertModule } from './routes/advert/advert.module';

@Module({
    imports: [
        AuthModule,
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: localConf,
        }),
        UsersModule,
        AdvertModule,
        ConfigModule.forRoot({isGlobal: true})],
    controllers: [],
    providers: [],
})
export class AppModule {
}
