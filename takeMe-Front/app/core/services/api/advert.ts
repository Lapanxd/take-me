import { IAdvert } from "../../models/advert.model"
import { GeneralApiProblem, getGeneralApiProblem } from "./apiProblem"
import { ApiResponse, ApisauceInstance, create } from "apisauce"
import { ApiConfig } from "./api.types"
import Config from "app/config"

export class Advert {
  apisauce: ApisauceInstance
  config: ApiConfig

  constructor() {
    this.config = {
      url: Config.API_URL,
      timeout: 1000,
    }

    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json",
      },
    })
  }

  async findAll(): Promise<IAdvert[]> {
    try {
      const response: ApiResponse<IAdvert[]> = await this.apisauce.get(`/adverts`)
      const data = response.data
      console.log(data)
      return data
    } catch (err) {
      if (__DEV__) {
        console.tron.error(`Bad data: ${err.message}\n}`, err.stack)
      }
      return null
    }
  }

  async findOne(id: number): Promise<IAdvert | null> {
    try {
      const response: ApiResponse<IAdvert> = await this.apisauce.get(`/adverts/${id}`)
      const data = response.data
      console.log(data)
      return data
    } catch (err) {
      if (__DEV__) {
        console.tron.error(`Bad data: ${err.message}\n}`, err.stack)
      }
      return null
    }
  }
}

export const advertService = new Advert()
