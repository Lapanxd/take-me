import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { api } from "../services/api"
import { Advert, AdvertModel } from "./Advert"
import { withSetPropAction } from "./helpers/withSetPropAction"

export const AdvertStoreModel = types
  .model("AdvertStore")
  .props({
    adverts: types.array(AdvertModel),
    favorites: types.array(types.reference(AdvertModel)),
    favoritesOnly: false,
  })
  .actions(withSetPropAction)
  .actions((store) => ({
    async fetchAdverts() {
      const response = await api.getAdverts()
      if (response.kind === "ok") {
        store.setProp("adverts", response.adverts)
      } else {
        console.tron.error(`Error fetching adverts: ${JSON.stringify(response)}`, [])
      }
    },
    addFavorite(advert: Advert) {
      store.favorites.push(advert)
    },
    removeFavorite(advert: Advert) {
      store.favorites.remove(advert)
    },
  }))
  .views((store) => ({
    get advertsForList() {
      return store.favoritesOnly ? store.favorites : store.adverts
    },

    hasFavorite(advert: Advert) {
      return store.favorites.includes(advert)
    },
  }))
  .actions((store) => ({
    toggleFavorite(advert: Advert) {
      if (store.hasFavorite(advert)) {
        store.removeFavorite(advert)
      } else {
        store.addFavorite(advert)
      }
    },
  }))

export interface AdvertStore extends Instance<typeof AdvertStoreModel> {}
export interface AdvertStoreSnapshot extends SnapshotOut<typeof AdvertStoreModel> {}

// @demo remove-file
