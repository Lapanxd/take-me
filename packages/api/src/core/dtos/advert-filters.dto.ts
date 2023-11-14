import { IsOptional, IsNumber, IsDate, IsString } from 'class-validator';

export class AdvertFiltersDto {
  @IsOptional()
  objectType: number;

  @IsOptional()
  city: string;
}
