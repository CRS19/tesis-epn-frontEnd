import { ILoginFormActions } from "../../Screens/Login/state/useLogin.interfaces";

export interface ILoginFormProps {
  login: () => void;
  loginFormActions: ILoginFormActions;
}
