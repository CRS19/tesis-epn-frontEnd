/* istanbul ignore file */
import axios, { AxiosRequestConfig } from "axios";
import { isNil } from "lodash";

// TODO: mejora jasdlfslñfaslkfl no sirve
const instance = axios.create({
  headers: {
    //Authorization: defaultTo(localStorage.getItem("jwt"), ""),
    "Content-type": "application/json",
  },
});

export default instance;

const getJWT = () =>
  isNil(localStorage.getItem("jwt"))
    ? JSON.stringify("empty")
    : JSON.parse(localStorage.getItem("jwt")!);

export const getFetchOptions = () => {
  const jwt = getJWT();

  const options = {
    headers: new Headers({
      "content-type": "application/json",
      Authorization: `Bearer ${jwt}`,
    }),
  };

  return options;
};

export const getAxiosOptions = () => {
  const jwt = getJWT();

  const options: AxiosRequestConfig = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  };

  return options;
};
