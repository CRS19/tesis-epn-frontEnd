import { IUser } from "./User.interfaces";

export interface ILoginResponse {
  access_token: string;
  user: IUser;
}

export interface ILoginRequest {
  mail: string;
  password: string;
}
