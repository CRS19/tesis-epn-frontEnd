import { useAppSelector } from "../../Hooks/useAppHooks";
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
} from "../../Shared/Interfaces/LoginRequest.interfaces";
import { defaultTo, isNil } from "lodash";

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

      console.log(response.data);
      dispatch(setCurrentUser(response.data.user));
      dispatch(setIsLoggedIn(true));
      callBack();
    } catch (e) {
      console.log(e);
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
