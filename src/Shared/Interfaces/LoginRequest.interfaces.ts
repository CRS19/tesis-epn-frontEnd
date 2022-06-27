import { IUser } from "./User.interfaces";

export interface ILoginResponse {
  access_token: string;
  user: IUser;
}

export interface IRegisterResponse {
  message: string;
  updatedResposne: IUser;
}

export interface IGetUserResponse {
  message: string;
  user: IUser;
}

export interface ILoginRequest {
  mail: string;
  password: string;
}

export interface IRegisterRequest {
  fullName: string;
  idDevice: string;
  isDevice: boolean;
  isPossibleSick: boolean;
  isSick: boolean;
  mail: string;
  password: string;
  rol: String;
}
