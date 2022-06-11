import { RoutesEnum } from "../../Shared/Enums/Routes";

export interface INavigationButtomProps {
  title: string;
  navigateTo: RoutesEnum;
  path: RoutesEnum;
  windowWidth: number;
  width?: string;
}
