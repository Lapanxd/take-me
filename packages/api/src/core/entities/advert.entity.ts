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
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Advert implements IAdvert {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1 })
  id: number;

  @Column()
  @ApiProperty({ example: 'Canapé bleu' })
  name: string;

  @Column()
  @ApiProperty({ example: 'Un super canapé bleu est plutôt bon état.' })
  description: string;

  @JoinColumn()
  @ApiProperty({ example: { id: 1, name: 'meuble' } })
  @ManyToOne(() => ObjectType, (objectType) => objectType.advert)
  objectType: IObjectType;

  @OneToMany(() => ObjectImage, (objectImage: ObjectImage) => objectImage.advert, {
    cascade: true,
    eager: true,
  })
  @ApiProperty({ example: ['url.com/img.png', 'url.com/img2.png'] })
  images: IObjectImage[];

  @Column()
  @ApiProperty({ example: -20 })
  latitude: number;

  @Column()
  @ApiProperty({ example: -10 })
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
