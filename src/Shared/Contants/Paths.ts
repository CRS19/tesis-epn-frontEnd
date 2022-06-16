import { RoutesEnum } from "./../Enums/Routes";
export const SERVICE_PATHS = {
  auth: "/auth",
  contacts: "/contacts",
  users: "/users",
};

export const AUTH_ENDPOINTS = {
  login: "/login",
  register: "/Register",
};

export const USERS_ENDPOINTS = {
  linkDevice: "/vinculateDevice",
};

export const ROUTES_ARRAY = [
  "HOME",
  "HISTORIAL",
  "RECOMENDACIONES",
  "DEVINCULAR",
];

export const ROUTES_ARRAY_TO_NAV_URL: Record<number, RoutesEnum> = {
  [0]: RoutesEnum.HOME,
  [1]: RoutesEnum.HISTORY,
  [2]: RoutesEnum.RECOMENDATIONS,
  [3]: RoutesEnum.LINK_DEVICE,
};
