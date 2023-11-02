import { ApiResponse, ApisauceInstance, create } from 'apisauce';
import { ApiConfig } from './api.types';
import Config from 'app/config';
import { IAdvert } from '../../models/Advert';
import { ISignUpUser } from '../../models/SignUpUser';
import { ISignInUser } from '../../models/SignInUser';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class AuthService {
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

  async signUp(user: ISignUpUser) {
    try {
      const response: ApiResponse<IAdvert> = await this.apisauce.post(`/auth/sign-up}`, user);
      return response.data;
    } catch (err) {
      if (__DEV__) {
        console.tron.error(`Bad data: ${err.message}\n}`, err.stack);
      }
      return null;
    }
  }

  async signIn(user: ISignInUser): Promise<void> {
    try {
      const response: ApiResponse<{ accessToken: string; refreshToken: string }> =
        await this.apisauce.post(`/auth/sign-in`, user);

      if (!response) {
        return;
      }

      await AsyncStorage.setItem('accessToken', response.data.accessToken);
      await AsyncStorage.setItem('refreshToken', response.data.refreshToken);
    } catch (err) {
      if (__DEV__) {
        console.tron.error(`Bad data: ${err.message}\n}`, err.stack);
      }
      return null;
    }
  }
}

export const authService = new AuthService();
