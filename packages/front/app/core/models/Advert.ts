import { IObjectImage } from './ObjectImage';
import { IObjectType } from './ObjectType';

export interface IAdvert {
  id?: number;
  name: string;
  description: string;
  objectType?: IObjectType;
  images?: {
    mime: string;
    base64: string;
  };
  geocode: number[];
}
