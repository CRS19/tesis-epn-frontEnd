import { IUser } from "./../Interfaces/User.interfaces";
import { get } from "lodash";
import { RoutesEnum, TRASLATE_PATH } from "../Enums/Routes";

export const setVinculateToArray = (prevVal: string[]) => {
  let routesArray = [...prevVal];
  routesArray.pop();
  routesArray.push("VINCULAR");
  return routesArray;
};

export const userHasIdDevice = (currentUser: IUser) =>
  get(currentUser, "idDevice", "") !== "";

export const getTitlePage = (pathname: string, currentUser: IUser): string => {
  if (!userHasIdDevice(currentUser) && pathname === RoutesEnum.LINK_DEVICE) {
    return "Vincular";
  }
  return TRASLATE_PATH[pathname as RoutesEnum];
};
