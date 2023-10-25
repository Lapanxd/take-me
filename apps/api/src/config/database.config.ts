import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Advert } from '../core/entities/advert.entity';
import { User } from '../core/entities/user.entity';
import { ObjectType } from '../core/entities/object-type.entity';
import { ObjectImage } from '../core/entities/object-image.entity';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const localConf: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'admin',
  password: 'admin',
  database: 'takeme',
  entities: [User, Advert, ObjectType, ObjectImage],
  namingStrategy: new SnakeNamingStrategy(),
  synchronize: true,
};
