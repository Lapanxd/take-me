import { IsDefined, IsEmail, IsString } from 'class-validator';

export class SignInUserDto {
  @IsDefined()
  @IsEmail()
  email: string;

  @IsDefined()
  @IsString()
  password: string;
}
