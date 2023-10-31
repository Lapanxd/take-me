import { Api } from "./api"
import { IAdvert } from "../../models/advert.model"
import { GeneralApiProblem, getGeneralApiProblem } from "./apiProblem"
import { ApiResponse } from "apisauce"

export class Advert extends Api {
  constructor() {
    super()
  }

  async getAdverts(): Promise<IAdvert | GeneralApiProblem> {
    console.log(this.apisauce)
    console.log(this.config)

    // const response: ApiResponse<IAdvert> = await this.apisauce.get(`/advert`)
    //
    // if (!response.ok) {
    //   const problem = getGeneralApiProblem(response)
    //   if (problem) {
    //     return problem
    //   }
    // }

    try {
      // const rawData = response.data

      console.log(rawData)

      // return rawData
    } catch (err) {
      if (__DEV__) {
        // console.tron.error(`Bad data: ${err.message}\n${response.data}`, err.stack)
      }
    }
  }
}

export const advertService = new Advert()
