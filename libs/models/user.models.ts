export interface IUser {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	city: string;
	createdAt?: Date;
	updatedAt?: Date;
	deletedAt?: Date;
}
