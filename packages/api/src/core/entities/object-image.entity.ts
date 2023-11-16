import {Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import { IObjectImage } from '../models/objectImage.model';
import { Advert } from './advert.entity';

@Entity()
export class ObjectImage implements IObjectImage {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Advert, (advert) => advert.image)
  @JoinColumn()
  advert: Advert;

  @Column()
  url: string;

  @Column()
  mime: string;

  @Column()
  base64: string;

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
