import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"
import { formatDate } from "../utils/formatDate"
import { translate } from "../i18n"

interface Enclosure {
  link: string
  type: string
  length: number
  duration: number
  rating: { scheme: string; value: string }
}

/**
 * This represents an advert of React Native Radio.
 */
export const AdvertModel = types
  .model("Advert")
  .props({
    guid: types.identifier,
    adname: "",
    pubDate: "", // Ex: 2022-08-12 21:05:36
    description: "",
    quantity: "",
    longitude: "",
    latitude: "",
    enclosure: types.frozen<Enclosure>(),
    categories: types.array(types.string),
  })
  .actions(withSetPropAction)
  .views((advert) => ({
    get parsedTitleAndSubtitle() {
      const defaultValue = { adname: advert.adname?.trim(), subtitle: "" }

      if (!defaultValue.adname) return defaultValue

      const titleMatches = defaultValue.adname.match(/^(RNR.*\d)(?: - )(.*$)/)

      if (!titleMatches || titleMatches.length !== 3) return defaultValue

      return { title: titleMatches[1], subtitle: titleMatches[2] }
    },
    get datePublished() {
      try {
        const formatted = formatDate(advert.pubDate)
        return {
          textLabel: formatted,
          accessibilityLabel: translate("advertListScreen.accessibility.publishLabel", {
            date: formatted,
          }),
        }
      } catch (error) {
        return { textLabel: "", accessibilityLabel: "" }
      }
    },
    get duration() {
      const seconds = Number(advert.enclosure.duration)
      const h = Math.floor(seconds / 3600)
      const m = Math.floor((seconds % 3600) / 60)
      const s = Math.floor((seconds % 3600) % 60)

      const hDisplay = h > 0 ? `${h}:` : ""
      const mDisplay = m > 0 ? `${m}:` : ""
      const sDisplay = s > 0 ? s : ""
      return {
        textLabel: hDisplay + mDisplay + sDisplay,
        accessibilityLabel: translate("advertListScreen.accessibility.durationLabel", {
          hours: h,
          minutes: m,
          seconds: s,
        }),
      }
    },
  }))

export interface Advert extends Instance<typeof AdvertModel> {}
export interface AdvertSnapshotOut extends SnapshotOut<typeof AdvertModel> {}
export interface AdvertSnapshotIn extends SnapshotIn<typeof AdvertModel> {}

// @demo remove-file
