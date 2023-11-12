import { ApiResponse, ApisauceInstance, create } from 'apisauce';
import { ApiConfig } from './api.types';
import Config from 'app/config';
import { ISignUpUser } from '../../models/SignUpUser';
import { ISignInUser } from '../../models/SignInUser';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IUser } from '../../models/User';

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

  async signUp(user: ISignUpUser): Promise<ISignUpUser> {
    try {
      const response: ApiResponse<ISignUpUser> = await this.apisauce.post(`/auth/sign-up`, user);
      return response.data;
    } catch (err) {
      if (__DEV__) {
        console.tron.error(`Bad data: ${err.message}\n}`, err.stack);
      }
      return null;
    }
  }

  async signIn(user: ISignInUser): Promise<any> {
    //@TODO mettre un vrai type plutôt que any
    try {
      const response: ApiResponse<{ id: string; accessToken: string; refreshToken: string }> =
        await this.apisauce.post(`/auth/sign-in`, user);

      if (!response || (response && (!response.data.accessToken || !response.data.refreshToken))) {
        return;
      }

      console.log(response);

      await AsyncStorage.setItem('accessToken', response.data.accessToken);
      await AsyncStorage.setItem('refreshToken', response.data.refreshToken);
      await AsyncStorage.setItem('userId', response.data.id);

      console.log(response.data.accessToken);

      return { accessToken: response.data.accessToken, refreshToken: response.data.refreshToken };
    } catch (err) {
      if (__DEV__) {
        console.tron.error(`Bad data: ${err.message}\n}`, err.stack);
      }
      return null;
    }
  }
}

export const authService = new AuthService();
