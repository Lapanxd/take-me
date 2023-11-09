import { ApiResponse, ApisauceInstance, create } from 'apisauce';
import { ApiConfig } from './api.types';
import Config from 'app/config';
import { IAdvert } from '../../models/Advert';
import { ISignUpUser } from '../../models/SignUpUser';
import { ISignInUser } from '../../models/SignInUser';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useStores } from '../../helpers/useStores';

export class AuthService {
  apisauce: ApisauceInstance;
  config: ApiConfig;
  authenticationStore;

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
      const response: ApiResponse<IAdvert> = await this.apisauce.post(`/auth/sign-up`, user);
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
      console.log('dans le service');

      const response: ApiResponse<{ accessToken: string; refreshToken: string }> =
        await this.apisauce.post(`/auth/sign-in`, user);

      if (!response) {
        return;
      }

      const {
        authenticationStore: { setAuthToken, setRefreshToken, isAuthenticated },
      } = useStores();

      console.log(response.data);

      setAuthToken(response.data.accessToken);
      setRefreshToken(response.data.accessToken);

      if (isAuthenticated) {
        console.log('isAuthenticated');
      }
    } catch (err) {
      if (__DEV__) {
        console.tron.error(`Bad data: ${err.message}\n}`, err.stack);
      }
      return null;
    }
  }
}

export const authService = new AuthService();
