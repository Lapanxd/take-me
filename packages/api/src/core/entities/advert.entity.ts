import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  ManyToMany,
} from 'typeorm';
import { IAdvert } from '../models/advert.model';
import { IObjectImage } from '../models/objectImage.model';
import { IObjectType } from '../models/objectType.model';
import { ObjectType } from './object-type.entity';
import { ObjectImage } from './object-image.entity';

@Entity()
export class Advert implements IAdvert {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => ObjectType, (objectType) => objectType.advert)
  objectType: IObjectType;

  @OneToMany(() => ObjectImage, (objectImage: ObjectImage) => objectImage.advert, {
    cascade: true,
    eager: true,
  })
  images: IObjectImage[];

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column({
    nullable: true,
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    select: false,
  })
  createdAt: Date;

  @Column({
    nullable: true,
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    select: false,
  })
  updatedAt: Date;

  @Column({ nullable: true, select: false })
  deletedAt: Date;
}
