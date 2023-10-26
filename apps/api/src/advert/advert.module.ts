import { Module } from '@nestjs/common';
import { AdvertController } from './advert.controller';
import { AdvertService } from './advert.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Advert } from '../core/entities/advert.entity';
import { ObjectType } from '../core/entities/object-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Advert, ObjectType])],
  controllers: [AdvertController],
  providers: [AdvertService],
})
export class AdvertModule {}
