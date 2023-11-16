import { IObjectType } from './models/ObjectType';

export interface CreateAdvertDto {
  name: string;
  description: string;
  objectType?: number;
  images?: { mime: string; base64: string }[];
  latitude: number;
  longitude: number;
}
