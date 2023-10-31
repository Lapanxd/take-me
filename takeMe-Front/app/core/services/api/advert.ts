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

  async getAdverts(): Promise<IAdvert | GeneralApiProblem> {
    const response: ApiResponse<IAdvert> = await this.apisauce.get(`/adverts`)

    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) {
        return problem
      }
    }

    try {
      const rawData = response.data

      console.log(rawData)

      return rawData
    } catch (err) {
      if (__DEV__) {
        console.tron.error(`Bad data: ${err.message}\n${response.data}`, err.stack)
      }
      return
    }
  }
}

export const advertService = new Advert()
