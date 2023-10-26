import { IUser } from '@takeme/models';
import { isDefined, IsDefined, IsString } from "class-validator";

export class SignUpUserDto implements IUser {
  @IsDefined()
  @IsString()
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  city: string;
}
