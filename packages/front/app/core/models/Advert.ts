import { IObjectImage } from './ObjectImage';
import { IObjectType } from './ObjectType';

export interface IAdvert {
  id?: number;
  name: string;
  objectType: IObjectType;
  images: IObjectImage[];
  latitude: number;
  longitude: number;
  geocode: number;
}
