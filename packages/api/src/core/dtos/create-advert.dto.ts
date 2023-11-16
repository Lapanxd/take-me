import { IsDefined, IsNumber, IsOptional, IsString } from 'class-validator';
import { IObjectType } from '../models/objectType.model';
import { ApiProperty } from '@nestjs/swagger';
import { IObjectImage } from '../models/objectImage.model';
export class CreateAdvertDto {
  @IsDefined()
  @IsString()
  @ApiProperty({ example: 'Canapé bleu' })
  name: string;

  @IsDefined()
  @IsString()
  @ApiProperty({ example: 'Un super canapé bleu est plutôt bon état.' })
  description: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ example: { id: 1, name: 'meuble' } })
  objectType: IObjectType;

  @IsDefined()
  @ApiProperty({ example: ['url.com/img.png', 'url.com/img2.png'] })
  images: IObjectImage[];

  @IsDefined()
  @IsNumber()
  @ApiProperty({ example: -20 })
  latitude: number;

  @IsDefined()
  @IsNumber()
  @ApiProperty({ example: -10 })
  longitude: number;
}
