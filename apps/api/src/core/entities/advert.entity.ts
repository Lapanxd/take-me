import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { IAdvert } from '@takeme/models/advert.model';
import { IObjectImage } from '@takeme/models/objectImage.model';
import { IObjectType } from '@takeme/models/objectType.model';
import { ObjectType } from './object-type.entity';
import { ObjectImage } from './object-image.entity';

@Entity()
export class Advert implements IAdvert {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => ObjectType)
  @JoinColumn()
  objectType: IObjectType;

  @OneToMany(() => ObjectImage, (objectImage) => objectImage.id)
  images: IObjectImage[];

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column({
    nullable: true,
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column({
    nullable: true,
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @Column({ nullable: true })
  deletedAt: Date;
}
