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
import { ApiOkResponse } from '@nestjs/swagger';
import { Request } from 'express';
import { ValidationPipe } from '../../core/pipes/validation.pipe';
import { AdvertFiltersDto } from '../../core/dtos/advert-filters.dto';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('adverts')
export class AdvertController {
  constructor(private readonly advertService: AdvertService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOkResponse({
    status: 200,
    type: Advert,
    isArray: false,
  })
  async create(@Body() createAdvertDto: CreateAdvertDto): Promise<Advert> {
    return await this.advertService.create(createAdvertDto);
  }

  @Get()
  @ApiOkResponse({
    type: Advert,
    isArray: true,
  })
  async findAll(): Promise<Advert[]> {
    return await this.advertService.findAll();
  }

  @Get('filtered')
  async findByFilter(
    @Query(new ValidationPipe()) filteredParams: AdvertFiltersDto,
  ): Promise<Advert[]> {
    return await this.advertService.findByFilter(filteredParams);
  }

  @Get(':id')
  @ApiOkResponse({
    type: Advert,
    isArray: false,
  })
  async findById(@Param('id') id: number): Promise<Advert> {
    return await this.advertService.findById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @HttpCode(204)
  @ApiOkResponse({
    status: 204,
    isArray: false,
  })
  async update(@Param('id') id: number, @Body() advert: AdvertDto) {
    await this.advertService.update(id, advert);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiOkResponse({
    status: 204,
    isArray: false,
  })
  async delete(@Param('id') id: number) {
    await this.advertService.delete(id);
  }
}
