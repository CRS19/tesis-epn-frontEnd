import {
  IConfirmPasswordProps,
  INewPasswordInputProps,
} from "./../../../components/Inputs/NewPasswordInput/NewPasswordInput.interfaces";
import { IEmailInputProps } from "./../../../components/Inputs/EmailInput/EmailInput.interfaces";
import { IFullNameInputProps } from "../../../components/Inputs/FullNameInput/FullNameInput.interfaces";

export interface IUseLogin {
  isLoading: boolean;
  isRegister: boolean;
  login: () => void;
  loginFormActions: ILoginFormActions;
  registerFormActions: IRegisterFormActions;
}

export interface ILoginFormActions {
  setPassword: (text: string) => void;
  setEmail: (text: string) => void;
  changeLoginFormToRegister: () => void;
}

export interface IRegisterFormActions {
  fullNameInputProps: IFullNameInputProps;
  emailInputProps: IEmailInputProps;
  newPasswordProps: INewPasswordInputProps;
  confirmPasswordProps: IConfirmPasswordProps;
  registerNewUser: () => void;
  changeRegisterFormToLogin: () => void;
}
