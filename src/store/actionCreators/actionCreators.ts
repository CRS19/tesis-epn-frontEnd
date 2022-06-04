import { rolesEnum } from "./../../Shared/Enums/Roles";
import { IRegisterFormValues } from "./../../../utility/form-utils";
import {
  changeTestText,
  IAppState,
  setCurrentUser,
  setIsLoading,
  setIsLoggedIn,
  setSnackBarMessage,
} from "../reducer/reducer";
import { AppThunk } from "../store";
import axios from "../../../utility/axios-utils";
import { AUTH_ENDPOINTS, SERVICE_PATHS } from "../../Shared/Contants/Paths";
import {
  ILoginRequest,
  ILoginResponse,
  IRegisterRequest,
  IRegisterResponse,
} from "../../Shared/Interfaces/LoginRequest.interfaces";
import { isNil } from "lodash";
import { IAxiosError } from "../../Shared/Interfaces/Axios.interfaces";
import { AxiosError } from "axios";

export type IAppAction = {
  type: string;
} & IAppState;

export const getTestText =
  (text: string): AppThunk =>
  (dispatch, getState) => {
    dispatch(changeTestText(text));
  };

export const getAuthToken =
  (request: ILoginRequest, callBack: () => void): AppThunk =>
  async (dispatch, getState) => {
    dispatch(setIsLoading(true));
    const path = `${process.env.NEXT_PUBLIC_BASE_API_PATH!}${
      SERVICE_PATHS.auth
    }${AUTH_ENDPOINTS.login}`;

    try {
      const response = await axios.post<ILoginResponse>(path, request);

      localStorage.setItem("jwt", JSON.stringify(response.data.access_token));

      dispatch(setCurrentUser(response.data.user));
      dispatch(setIsLoggedIn(true));
      callBack();
    } catch (e) {
      dispatch(
        setSnackBarMessage({
          messageText: "Contraseña o Usuario Incorrectos",
          severity: "error",
        })
      );
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const checkAuthToken = (): AppThunk => (dispatch, getState) => {
  const jwt = isNil(localStorage.getItem("jwt"))
    ? JSON.stringify("empty")
    : JSON.parse(localStorage.getItem("jwt")!);

  const options = {
    headers: new Headers({
      "content-type": "application/json",
      Authorization: `Bearer ${jwt}`,
    }),
  };

  fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_PATH}${SERVICE_PATHS.auth}/protected`,
    options
  ).then((response) => {
    if (response.status !== 200) {
      dispatch(setIsLoggedIn(false));
      localStorage.removeItem("jwt");
    } else {
      dispatch(setIsLoggedIn(true));
    }
  });
};

export const setLogOut = (): AppThunk => (dispatch, getState) => {
  localStorage.removeItem("jwt");
  dispatch(setIsLoggedIn(false));
};

export const createNewUser =
  (userFormValue: IRegisterFormValues): AppThunk =>
  async (dispatch, getState) => {
    dispatch(setIsLoading(true));

    const path = `${process.env.NEXT_PUBLIC_BASE_API_PATH!}${
      SERVICE_PATHS.users
    }${AUTH_ENDPOINTS.register}`;

    try {
      const createNewUserRequest: IRegisterRequest = {
        fullName: userFormValue.userName,
        idDevice: "",
        isDevice: false,
        isPossibleSick: false,
        isSick: false,
        mail: userFormValue.email,
        password: userFormValue.password,
        rol: rolesEnum.USER,
      };

      const response = await axios.post<IRegisterResponse>(
        path,
        createNewUserRequest
      );

      console.log("Usuario ingresado exitosamente");

      dispatch(
        setSnackBarMessage({
          messageText: "Usuario Ingresado Exitosamente",
          severity: "success",
        })
      );
    } catch (e) {
      const error = e as AxiosError;

      if (error.response!.status! === 406) {
        dispatch(
          setSnackBarMessage({
            messageText: "El usuario ya existe",
            severity: "error",
          })
        );
      } else {
        dispatch(
          setSnackBarMessage({
            messageText: "Error al registrar el usuario ",
            severity: "error",
          })
        );
      }
    } finally {
      dispatch(setIsLoading(false));
    }
  };
