import { IUser } from "../../../Shared/Interfaces/User.interfaces";

export interface IUseHome {
  isLoggedIn: boolean;
  logOut: () => void;
  currentUser: IUser;
}
