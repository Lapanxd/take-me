import { IAdvert } from '../../models/Advert';
import { ApiResponse, ApisauceInstance, create } from 'apisauce';
import { ApiConfig } from './api.types';
import Config from 'app/config';
import { IUpdateAdvert } from '../../models/UpdateAdvert';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AdvertDto } from '../../advert.dto';
import { CreateAdvertDto } from '../../create-advert.dto';

export class AdvertService {
  apisauce: ApisauceInstance;
  config: ApiConfig;

  constructor() {
    this.config = {
      url: Config.API_URL,
      timeout: 1000,
    };

    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: 'application/json',
      },
    });
  }

  async getAccessToken() {
    return await AsyncStorage.getItem('accessToken');
  }

  async findAll(): Promise<IAdvert[]> {
    try {
      const response: ApiResponse<AdvertDto[]> = await this.apisauce.get(`/adverts`);

      const test = response.data.map((advert) => {
        const images = advert.images
          ? { mime: advert.images[0].mime, base64: advert.images[0].base64 }
          : { mime: '', base64: '' };

        const geocode =
          advert.latitude && advert.longitude ? [advert.latitude, advert.longitude] : [0, 0];

        return {
          ...advert,
          images,
          geocode,
        };
      });

      return test;
    } catch (err) {
      if (__DEV__) {
        console.tron.error(`Bad data: ${err.message}\n}`, err.stack);
      }
      return null;
    }
  }

  async findOne(id: number): Promise<IAdvert> {
    try {
      const response: ApiResponse<IAdvert> = await this.apisauce.get(`/adverts/${id}`);
      return response.data;
    } catch (err) {
      if (__DEV__) {
        console.tron.error(`Bad data: ${err.message}\n}`, err.stack);
      }
      return null;
    }
  }

  async create(createAdvert: AdvertDto): Promise<IAdvert> {
    try {
      const newAdvert: CreateAdvertDto = {
        latitude: createAdvert.geocode[0],
        longitude: createAdvert.geocode[1],
        images: [createAdvert.images],
        objectType: 1, //@todo refacto
        name: createAdvert.name,
        description: createAdvert.description,
      };

      const response: ApiResponse<IAdvert> = await this.apisauce.post(`/adverts`, newAdvert, {
        headers: { Authorization: `Bearer ${await this.getAccessToken()}` },
      });
      return response.data;
    } catch (err) {
      if (__DEV__) {
        console.tron.error(`Bad data: ${err.message}\n}`, err.stack);
      }
      return null;
    }
  }

  async update(updateAdvert: IUpdateAdvert): Promise<void> {
    try {
      const response: ApiResponse<void> = await this.apisauce.patch(`/adverts}`, updateAdvert, {
        headers: { Authorization: `Bearer ${await this.getAccessToken()}` },
      });
    } catch (err) {
      if (__DEV__) {
        console.tron.error(`Bad data: ${err.message}\n}`, err.stack);
      }
      return null;
    }
  }
}

export const advertService = new AdvertService();
