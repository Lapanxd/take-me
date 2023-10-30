import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IObjectImage } from '@takeme/models/objectImage.model';

@Entity()
export class ObjectImage implements IObjectImage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column({ nullable: true })
  createdAt: Date;

  @Column({ nullable: true })
  updatedAt: Date;
}
