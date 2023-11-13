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
      this.apisauce.setHeaders({
        Authorization: `Bearer ${await this.getAccessToken()}`,
      });

      const response: ApiResponse<IUser> = await this.apisauce.get(`/users/${id}`, {});
      return response.data;
    } catch (err) {
      if (__DEV__) {
        console.tron.error(`Bad data: ${err.message}\n}`, err.stack);
      }
      return null;
    }
  }

  async updateUser(updatedUser: IUpdateUser): Promise<boolean> {
    try {
      const result = await this.apisauce.put(
        `/users/${await AsyncStorage.getItem('userId')}`,
        updatedUser,
        {
          headers: { Authorization: `Bearer ${await this.getAccessToken()}` },
        },
      );

      return !!result;
    } catch (err) {
      if (__DEV__) {
        console.tron.error(`Bad data: ${err.message}\n}`, err.stack);
      }
      return null;
    }
  }

  async updatePassword(oldPassword: string, newPassword: string): Promise<boolean> {
    try {
      const result = await this.apisauce.put(
        `/users/${await AsyncStorage.getItem('userId')}/password`,
        { oldPassword, newPassword },
        {
          headers: { Authorization: `Bearer ${await this.getAccessToken()}` },
        },
      );

      return !!result;
    } catch (err) {
      if (__DEV__) {
        console.tron.error(`Bad data: ${err.message}\n}`, err.stack);
      }
      return null;
    }
  }
}

export const userService = new UserService();
