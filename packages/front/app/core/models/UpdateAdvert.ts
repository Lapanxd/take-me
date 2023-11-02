import { IObjectImage } from './ObjectImage';
import { IObjectType } from './ObjectType';

export interface IUpdateAdvert {
  name?: string;
  objectType?: IObjectType;
  images?: IObjectImage[];
  latitude?: number;
  longitude?: number;
}
