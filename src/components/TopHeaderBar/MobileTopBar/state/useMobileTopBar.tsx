import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../../Hooks/useAppHooks";
import { RoutesEnum, TRASLATE_PATH } from "../../../../Shared/Enums/Routes";
import { IUseMobileTopBar } from "./useMobileTopBar.interfaces";
import {
  ROUTES_ARRAY,
  ROUTES_ARRAY_TO_NAV_URL,
} from "../../../../Shared/Contants/Paths";
import {
  getTitlePage,
  setVinculateToArray,
  userHasIdDevice,
} from "../../../../Shared/Contants/TopBar";
import { IUser } from "../../../../Shared/Interfaces/User.interfaces";

export const useMobileTopBar = (): IUseMobileTopBar => {
  const { pathname, push } = useRouter();
  const { currentUser } = useAppSelector((store) => store.generalReducer!);
  const [routesArray, setRoutesArray] = useState<string[]>(ROUTES_ARRAY);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleOpenCloseMemu = (isOpen: boolean) => {
    setOpenMenu(isOpen);
  };

  const navigateTo = (index: number) => {
    push(ROUTES_ARRAY_TO_NAV_URL[index]);
  };

  useEffect(() => {
    if (!userHasIdDevice(currentUser as IUser)) {
      setRoutesArray(setVinculateToArray);
      return;
    }

    setRoutesArray(ROUTES_ARRAY);
  }, []);

  return {
    openMenu,
    routesArray,
    currentPath: getTitlePage(pathname, currentUser as IUser),
    handleOpenCloseMemu,
    navigateTo,
  };
};
