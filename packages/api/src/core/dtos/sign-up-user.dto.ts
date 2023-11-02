import { IUser } from '../models/user.model';
import { IsDefined, IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignUpUserDto implements IUser {
  @IsDefined()
  @IsString()
  @ApiProperty({ example: "John" })
  firstname: string;

  @IsDefined()
  @IsString()
  @ApiProperty({ example: "Doe" })
  lastname: string;

  @IsDefined()
  @IsEmail()
  @ApiProperty({ example: "john.doe@ynov.com"})
  email: string;

  @IsDefined()
  @IsString()
  @ApiProperty({ example: "secret-password:)" })
  password: string;

  @IsDefined()
  @IsString()
  @ApiProperty({ example: "Bordeaux" })
  city: string;
}
