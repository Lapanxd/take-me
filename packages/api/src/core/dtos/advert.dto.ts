import { IObjectImage } from '../models/objectImage.model';
import { IObjectType } from '../models/objectType.model';
import { IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

export class AdvertDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  id: number;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  objectType: IObjectType;

  @IsOptional()
  images: IObjectImage[];

  @IsOptional()
  @IsNumber()
  latitude: number;

  @IsOptional()
  @IsNumber()
  longitude: number;
}
