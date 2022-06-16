import { IUser } from "../../../Shared/Interfaces/User.interfaces";

export interface IUseLinkDevice {
  errorForm: IErrorFormLinkDevice;
  isLoading: boolean;
  isLoggedIn: boolean;
  idDevice: string;
  currentUserHasIdDevice: boolean;
  handleInputIdDevice: (idDevice: string) => void;
  onSubmit: () => void;
}

export interface IErrorFormLinkDevice {
  error: boolean;
  textError: string;
}
