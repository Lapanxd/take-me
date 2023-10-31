import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IObjectImage } from '@takeme/models/objectImage.model';
import { Advert } from './advert.entity';

@Entity()
export class ObjectImage implements IObjectImage {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Advert, (advert) => advert.images)
  advert: Advert;

  @Column()
  url: string;

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
