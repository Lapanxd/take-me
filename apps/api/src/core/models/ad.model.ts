import { IObjectImage } from './objectImage.model';
import { IObjectType } from './objectType.model';

export interface IAd {
  id: number;
  name: string;
  objectType: IObjectType;
  images: IObjectImage[];
  latitude: number;
  longitude: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
