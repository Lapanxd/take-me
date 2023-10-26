import { IObjectImage } from '@takeme/models/objectImage.model';
import { IObjectType } from '@takeme/models/objectType.model';

export class AdvertDto {
  id: number;
  name?: string;
  objectType?: IObjectType;
  images?: IObjectImage[];
  latitude?: number;
  longitude?: number;
}
