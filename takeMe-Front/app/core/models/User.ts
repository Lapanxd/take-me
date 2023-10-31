export interface IUser {
  id?: number
  firstname: string
  lastname: string
  email: string
  password?: string
  city?: string
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
}
