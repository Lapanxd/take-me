import { IsDefined, IsNumber, IsString } from 'class-validator';

export class CreateAdvertDto {
  @IsDefined()
  @IsString()
  name: string;

  @IsDefined()
  @IsNumber()
  objectType: number;

  @IsDefined()
  images: string[];

  @IsDefined()
  @IsNumber()
  latitude: number;

  @IsDefined()
  @IsNumber()
  longitude: string;
}
