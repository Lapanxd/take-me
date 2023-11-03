import { IsDefined, IsNumber, IsString } from 'class-validator';
import { IObjectType } from '../models/objectType.model';
import { ApiProperty } from '@nestjs/swagger';
export class CreateAdvertDto {
  @IsDefined()
  @IsString()
  @ApiProperty({ example: 'Canapé bleu' })
  name: string;

  @IsDefined()
  @IsString()
  @ApiProperty({ example: 'Un super canapé bleu est plutôt bon état.' })
  description: string;

  @IsDefined()
  @IsNumber()
  @ApiProperty({ example: { id: 1, name: 'meuble' } })
  objectType: IObjectType;

  @IsDefined()
  @ApiProperty({ example: ['url.com/img.png', 'url.com/img2.png'] })
  images: string[];

  @IsDefined()
  @IsNumber()
  @ApiProperty({ example: -20 })
  latitude: number;

  @IsDefined()
  @IsNumber()
  @ApiProperty({ example: -10 })
  longitude: number;
}
