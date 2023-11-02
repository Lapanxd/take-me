import { IUser } from '../models/user.model';
import { IsDefined, IsEmail, IsString } from 'class-validator';

export class SignUpUserDto implements IUser {
  @IsDefined()
  @IsString()
  firstname: string;

  @IsDefined()
  @IsString()
  lastname: string;

  @IsDefined()
  @IsEmail()
  email: string;

  @IsDefined()
  @IsString()
  password: string;

  @IsDefined()
  @IsString()
  city: string;
}
