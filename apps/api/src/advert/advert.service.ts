import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Advert } from '../core/entities/advert.entity';
import { Repository } from 'typeorm';
import { CreateAdvertDto } from '../core/dtos/create-advert.dto';
import { ObjectType } from '../core/entities/object-type.entity';
import { ObjectImage } from '../core/entities/object-image.entity';
import { AdvertDto } from '../core/dtos/advert.dto';

@Injectable()
export class AdvertService {
  constructor(
    @InjectRepository(Advert)
    private advertRepository: Repository<Advert>,
    @InjectRepository(ObjectType)
    private objectTypeRepository: Repository<ObjectType>,
  ) {}

  async create(advertDto: CreateAdvertDto): Promise<Advert> {
    try {
      const objectType = await this.objectTypeRepository.findOneBy({
        id: advertDto.objectType,
      });
      const images = [];

      for (const image of advertDto.images) {
        const newImage = new ObjectImage();
        newImage.url = image;
        images.push(newImage);
      }

      const advert = new Advert();

      advert.name = advertDto.name;
      advert.objectType = objectType;
      advert.images = images;
      advert.latitude = advertDto.latitude;
      advert.longitude = advertDto.latitude;

      return await this.advertRepository.save(advert);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async findAll(): Promise<Advert[]> {
    return await this.advertRepository.find();
  }

  async findById(id: number): Promise<Advert> {
    try {
      return this.advertRepository.findOneBy({ id });
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async update(advert: AdvertDto): Promise<void> {
    try {
      const updatedAdvert = await this.findById(advert.id);
      if (advert.name) {
        updatedAdvert.name = advert.name;
      }

      if (advert.objectType) {
        updatedAdvert.objectType = advert.objectType;
      }

      if (advert.images) {
        updatedAdvert.images = advert.images;
      }

      if (advert.longitude && advert.latitude) {
        updatedAdvert.longitude = advert.longitude;
        updatedAdvert.latitude = advert.latitude;
      }

      await this.advertRepository.save(updatedAdvert);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async delete(id: number): Promise<void> {
    try {
      await this.advertRepository.delete({ id });
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
  
}
