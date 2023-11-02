import { IsDefined, IsNumber, IsString } from 'class-validator';
import { IObjectType } from '../models/objectType.model';

export class CreateAdvertDto {
  @IsDefined()
  @IsString()
  name: string;

  @IsDefined()
  @IsString()
  description: string;

  @IsDefined()
  @IsNumber()
  objectType: IObjectType;

  @IsDefined()
  images: string[];

  @IsDefined()
  @IsNumber()
  latitude: number;

  @IsDefined()
  @IsNumber()
  longitude: number;
}