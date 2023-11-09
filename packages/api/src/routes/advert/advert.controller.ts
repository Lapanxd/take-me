import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Query,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AdvertService } from './advert.service';
import { Advert } from '../../core/entities/advert.entity';
import { CreateAdvertDto } from '../../core/dtos/create-advert.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AdvertDto } from '../../core/dtos/advert.dto';
import { Request } from 'express';
import { ValidationPipe } from '../../core/pipes/validation.pipe';
import { AdvertFiltersDto } from '../../core/dtos/advert-filters.dto';

@Controller('adverts')
export class AdvertController {
  constructor(private readonly advertService: AdvertService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createAdvertDto: CreateAdvertDto): Promise<Advert> {
    return await this.advertService.create(createAdvertDto);
  }

  @Get()
  async findAll(): Promise<Advert[]> {
    console.log('ça passe dans le endpoint find all');
    return await this.advertService.findAll();
  }

  @Get('filtered')
  async findByFilter(
    @Query(new ValidationPipe()) filteredParams: AdvertFiltersDto,
  ): Promise<Advert[]> {
    return await this.advertService.findByFilter(filteredParams);
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Advert> {
    return await this.advertService.findById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @HttpCode(204)
  async update(@Param('id') id: number, @Body() advert: AdvertDto) {
    await this.advertService.update(id, advert);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: number) {
    await this.advertService.delete(id);
  }
}
