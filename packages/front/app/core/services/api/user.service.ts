import { ApiResponse, ApisauceInstance, create } from 'apisauce';
import { ApiConfig } from './api.types';
import Config from 'app/config';
import { IUpdateAdvert } from '../../models/UpdateAdvert';
import { IUser } from '../../models/User';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IUpdateUser } from '../../models/UpdateUser';

export class UserService {
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

  async findOne(id: number): Promise<IUser> {
    try {
      console.log(await this.getAccessToken());

      const response: ApiResponse<IUser> = await this.apisauce.get(`/users/${id}`, {
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

  async update(updateAdvert: IUpdateUser): Promise<void> {
    try {
      const response: ApiResponse<void> = await this.apisauce.patch(`/adverts}`, updateAdvert, {
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
}

export const userService = new UserService();
