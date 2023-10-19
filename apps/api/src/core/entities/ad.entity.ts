import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IAd } from '@takeme/models/ad.model';
import { IObjectImage } from '@takeme/models/objectImage.model';
import { IObjectType } from '@takeme/models/objectType.model';
import { JoinColumn } from 'typeorm/browser';
import { ObjectType } from './object-type.entity';
import { ObjectImage } from './object-image.entity';

@Entity()
export class Ad implements IAd {
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
}
