import { ApiProperty } from '@nestjs/swagger';
import { IObjectImage } from '../models/objectImage.model';
import { IObjectType } from '../models/objectType.model';
import { IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

export class AdvertDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty({ example: 1 })
  id: number;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'Canapé bleu' })
  name: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'Un super canapé bleu est plutôt bon état.' })
  description: string;

  @IsOptional()
  @ApiProperty({ example: { id: 1, name: 'meuble' } })
  objectType: IObjectType;

  @IsOptional()
  @ApiProperty({ example: ['url.com/img.png', 'url.com/img2.png'] })
  image: IObjectImage;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ example: -20 })
  latitude: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ example: -10 })
  longitude: number;
}
