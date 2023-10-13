import { IAdImage } from './adImage.models';
import { ObjectType } from './type.models';

export interface IAd {
	id: number;
	name: string;
	objectType: ObjectType;
	images: IAdImage[];
	latitude: number;
	longitude: number;
	createdAt?: Date;
	updatedAt?: Date;
	deletedAt?: Date;
}
