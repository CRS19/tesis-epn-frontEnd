import { IUser } from "./../src/Shared/Interfaces/User.interfaces";
import { defaultTo } from "lodash";

export enum LOCALSTORAGE_ENUM {
  USER = "user",
}

export const getUser = (): IUser | {} => {
  let userObj;
  const userString = defaultTo(
    localStorage.getItem(LOCALSTORAGE_ENUM.USER),
    ""
  );

  try {
    userObj = JSON.parse(userString);
  } catch (e) {
    userObj = {};
  }

  return userObj;
};

export const setLocalStorageUser = (user: IUser) => {
  localStorage.setItem(LOCALSTORAGE_ENUM.USER, JSON.stringify(user));
};
