import { Instance, SnapshotOut, types, flow } from 'mobx-state-tree';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthenticationStoreModel = types
  .model('AuthenticationStore')
  .props({
    authToken: types.maybe(types.string),
    refreshToken: types.maybe(types.string),
    isAuthenticated: types.optional(types.boolean, false),
  })
  .views((store) => ({}))
  .actions((store) => ({
    setAuthToken(value?: string) {
      store.authToken = value;
    },
    setRefreshToken(value?: string) {
      store.refreshToken = value;
    },
    logout() {
      store.authToken = undefined;
      store.refreshToken = undefined;
      store.isAuthenticated = false;
    },
    checkAuthentication: flow(function* () {
      const result = yield AsyncStorage.getItem('accessToken');
      store.isAuthenticated = !!result;
    }),
  }));

export interface AuthenticationStore extends Instance<typeof AuthenticationStoreModel> {}
export interface AuthenticationStoreSnapshot extends SnapshotOut<typeof AuthenticationStoreModel> {}

// @demo remove-file
