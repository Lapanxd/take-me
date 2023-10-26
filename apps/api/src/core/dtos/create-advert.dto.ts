import { IsDefined, IsString } from 'class-validator';

export class CreateAdvertDto {
  @IsDefined()
  @IsString()
  name: string;

  objectType: number;
  images: string[];
  latitude: number;
  longitude: string;
}
