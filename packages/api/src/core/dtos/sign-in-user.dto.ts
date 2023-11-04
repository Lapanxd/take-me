import { IsDefined, IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignInUserDto {
  @IsDefined()
  @IsEmail()
  @ApiProperty({ example: "john.doe@ynov.com" })
  email: string;

  @IsDefined()
  @IsString()
  @ApiProperty({ example: "secret-password:)" })
  password: string;
}
