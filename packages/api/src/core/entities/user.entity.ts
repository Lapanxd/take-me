import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IUser } from '../models/user.model';
import * as bcrypt from 'bcrypt';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1 })
  id: number;

  @Column()
  @ApiProperty({ example: 'John' })
  firstname: string;

  @Column()
  @ApiProperty({ example: 'Doe' })
  lastname: string;

  @Column()
  @ApiProperty({ example: 'john.doe@ynov.com' })
  email: string;

  @Column()
  @ApiProperty({ example: 'secret-password:)' })
  password: string;

  @Column({ nullable: true })
  @ApiProperty({ example: 'Bordeaux' })
  city: string;

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

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}
