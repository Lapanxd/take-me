export interface IObjectImage {
  id?: number;
  url?: string;
  mime?: string;
  base64?: string;
  blob?: Uint8Array;
  createdAt?: Date;
  updatedAt?: Date;
}
