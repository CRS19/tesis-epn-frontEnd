import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../Hooks/useAppHooks";
import { RoutesEnum } from "../../../Shared/Enums/Routes";
import { ILoginRequest } from "../../../Shared/Interfaces/LoginRequest.interfaces";
import {
  checkAuthToken,
  getAuthToken,
  getTestText,
} from "../../../store/actionCreators/actionCreators";
import { IUseLogin } from "./useLogin.interfaces";

export const useLogin = (): IUseLogin => {
  const dispatch = useAppDispatch();
  const route = useRouter();
  const isLoggedIn = useAppSelector(
    (store) => store.generalReducer.isLoggedIn!
  );
  const [credentials, setCredentials] = useState<ILoginRequest>({
    mail: "",
    password: "",
  });
  const navigateToHome = () => {
    route.push(RoutesEnum.HOME);
  };
  const setPassword = (text: string) =>
    setCredentials((prevVal) => ({ ...prevVal, password: text }));
  const setEmail = (text: string) =>
    setCredentials((prevVal) => ({
      ...prevVal,
      mail: text.toLowerCase().trim(),
    }));

  const login = () => {
    // TODO: poner la logica de logIn here
    dispatch(getAuthToken(credentials, navigateToHome));
  };

  useEffect(() => {
    dispatch(checkAuthToken());
    if (!isLoggedIn) {
      route.push(RoutesEnum.LOGIN);
    } else {
      navigateToHome();
    }
  }, [isLoggedIn]);

  return { login, loginFormActions: { setPassword, setEmail } };
};
