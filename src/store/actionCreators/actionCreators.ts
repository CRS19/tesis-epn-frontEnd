import { rolesEnum } from "./../../Shared/Enums/Roles";
import { IRegisterFormValues } from "./../../../utility/form-utils";
import {
  changeTestText,
  IAppState,
  setCurrentUser,
  setGraphData,
  setIsLoading,
  setIsLoggedIn,
  setSnackBarMessage,
} from "../reducer/reducer";
import { AppThunk } from "../store";
import axios, {
  getAxiosOptions,
  getFetchOptions,
} from "../../../utility/axios-utils";
import {
  AUTH_ENDPOINTS,
  CONTACTS_ENPOINTS,
  SERVICE_PATHS,
  USERS_ENDPOINTS,
} from "../../Shared/Contants/Paths";
import {
  ILoginRequest,
  ILoginResponse,
  IRegisterRequest,
  IRegisterResponse,
} from "../../Shared/Interfaces/LoginRequest.interfaces";
import { isNil } from "lodash";
import { AxiosError } from "axios";
import { setLocalStorageUser } from "../../../utility/localStorage-utils";
import { IGraphData } from "../../components/NodesGraph/NodesGraph.interfaces";

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
      setLocalStorageUser(response.data.user);
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
  const options = getFetchOptions();

  try {
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
  } catch (e) {
    dispatch(
      setSnackBarMessage({
        messageText: "Existe un error en el servidor",
        severity: "error",
      })
    );
  }
};

export const setLogOut = (): AppThunk => (dispatch, getState) => {
  localStorage.removeItem("jwt");
  localStorage.removeItem("user");
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

export const linkDevice =
  (mail: string, idDevice: string): AppThunk =>
  async (dispatch, getState) => {
    dispatch(setIsLoading(true));
    const path = `${process.env.NEXT_PUBLIC_BASE_API_PATH!}${
      SERVICE_PATHS.users
    }${USERS_ENDPOINTS.linkDevice}`;
    const options = getAxiosOptions();

    try {
      const response = await axios.patch<IRegisterResponse>(
        path,
        {
          mail,
          idDevice,
        },
        options
      );

      const linkActionText =
        response.data.updatedResposne.idDevice === ""
          ? "desvinculado"
          : "vinculado";

      dispatch(setCurrentUser(response.data.updatedResposne));
      setLocalStorageUser(response.data.updatedResposne);
      dispatch(
        setSnackBarMessage({
          messageText: `Id de dispositivo ${linkActionText}!`,
          severity: "success",
        })
      );
    } catch (e) {
      dispatch(
        setSnackBarMessage({
          messageText: "Existe un error en el servidor",
          severity: "error",
        })
      );
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const getGraphData =
  (idDevice: string): AppThunk =>
  async (dispatch, getState) => {
    dispatch(setIsLoading(true));

    const path = `${process.env.NEXT_PUBLIC_BASE_API_PATH!}${
      SERVICE_PATHS.contacts
    }${CONTACTS_ENPOINTS.data}/${idDevice}`;
    const options = getAxiosOptions();

    try {
      const response = await axios.get<IGraphData>(path, options);

      console.log(response.data);
      dispatch(setGraphData(JSON.parse(JSON.stringify(response.data))));
      dispatch(setIsLoading(false));
    } catch (e) {
      dispatch(
        setSnackBarMessage({
          messageText: "Existe un error al obtener la información a graficar",
          severity: "error",
        })
      );
    } finally {
      dispatch(setIsLoading(false));
    }
  };
