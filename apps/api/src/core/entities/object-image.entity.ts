import { Entity } from 'typeorm';
import { IObjectImage } from '@takeme/models/objectImage.model';

@Entity()
export class ObjectImage implements IObjectImage {
  id: number;
  url: string;
}
