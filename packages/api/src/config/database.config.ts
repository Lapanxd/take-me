import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Advert } from '../core/entities/advert.entity';
import { User } from '../core/entities/user.entity';
import { ObjectType } from '../core/entities/object-type.entity';
import { ObjectImage } from '../core/entities/object-image.entity';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { ConfigService } from '@nestjs/config';

export const localConf = (configService: ConfigService): TypeOrmModuleOptions => ({
  type: 'mysql',
  host: configService.get('DB_HOST'),
  port: +configService.get('DB_PORT'),
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_DATABASE'),
  entities: [User, Advert, ObjectType, ObjectImage],
  namingStrategy: new SnakeNamingStrategy(),
  synchronize: configService.get('TYPEORM_SYNC') === 'true',
});
