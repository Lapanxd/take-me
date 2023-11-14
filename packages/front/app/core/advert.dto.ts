import { IObjectType } from './models/ObjectType';

export interface AdvertDto {
  id?: number;
  name: string;
  description: string;
  objectType?: IObjectType;
  images?: string[];
  latitude: number;
  longitude: number;
}
