import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IObjectType } from '../models/objectType.model';

@Entity()
export class ObjectType implements IObjectType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
