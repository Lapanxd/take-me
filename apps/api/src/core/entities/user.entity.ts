import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IUser } from '@takeme/models/user.model';

@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  city: string;
}
