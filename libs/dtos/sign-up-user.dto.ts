import { IUser } from "@takeme/models";
import { IsDefined, IsString } from "class-validator";

export class SignUpUserDto implements IUser {
	firstname: string;
	lastname: string;
	email: string;
	password: string;
	city: string;
}