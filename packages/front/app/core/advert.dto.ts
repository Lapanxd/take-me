import { IObjectType } from './models/ObjectType';
import { IObjectImage } from './models/ObjectImage';

export interface AdvertDto {
  id?: number;
  name: string;
  description: string;
  objectType?: IObjectType;
  images?: IObjectImage;
  geocode?: number[];
  latitude?: number;
  longitude?: number;
}
