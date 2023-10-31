import { IObjectImage } from './objectImage.model';
import { IObjectType } from './objectType.model';

export interface IAdvert {
  id?: number;
  name: string;
  objectType: IObjectType;
  images: IObjectImage[];
  latitude: number;
  longitude: number;
}
