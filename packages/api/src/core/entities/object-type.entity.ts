import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IObjectType } from '../models/objectType.model';
import { Advert } from './advert.entity';

@Entity()
export class ObjectType implements IObjectType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Advert, (advert) => advert.objectType)
  advert: Advert;
}
