import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IObjectImage } from '../models/objectImage.model';
import { Advert } from './advert.entity';
import { Buffer } from 'buffer';

@Entity()
export class ObjectImage {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Advert, (advert) => advert.images)
  advert: Advert;

  @Column()
  url: string;

  @Column({ type: 'mediumblob', nullable: true })
  blob: Buffer;

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
