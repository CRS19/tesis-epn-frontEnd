export enum RoutesEnum {
  LOGIN = "/",
  HOME = "/home",
  HISTORY = "/history",
  LINK_DEVICE = "/linkDevice",
  RECOMENDATIONS = "/recomendations",
}

export const TRASLATE_PATH: Record<RoutesEnum, string> = {
  [RoutesEnum.LOGIN]: "",
  [RoutesEnum.HOME]: "Home",
  [RoutesEnum.HISTORY]: "Historial",
  [RoutesEnum.LINK_DEVICE]: "Desvincular",
  [RoutesEnum.RECOMENDATIONS]: "Recomendaciones",
};
