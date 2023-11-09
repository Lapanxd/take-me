import { Instance, SnapshotOut, types } from 'mobx-state-tree';

export const AuthenticationStoreModel = types
  .model('AuthenticationStore')
  .props({
    authToken: types.maybe(types.string),
    refreshToken: types.maybe(types.string),
    authEmail: '',
  })
  .views((store) => ({
    get isAuthenticated() {
      return !!store.authToken;
    },
  }))
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
    },
  }));

export interface AuthenticationStore extends Instance<typeof AuthenticationStoreModel> {}
export interface AuthenticationStoreSnapshot extends SnapshotOut<typeof AuthenticationStoreModel> {}

// @demo remove-file
