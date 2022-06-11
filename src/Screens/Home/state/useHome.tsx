import { isNil } from "lodash";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../Hooks/useAppHooks";
import { useAuth } from "../../../Hooks/useAuth";
import { RoutesEnum } from "../../../Shared/Enums/Routes";
import { setLogOut } from "../../../store/actionCreators/actionCreators";
import { IUseHome } from "./useHome.interfaces";

export const useHome = (): IUseHome => {
  const router = useRouter();
  const { isLoggedIn } = useAuth();
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(
    (store) => store.generalReducer.currentUser!
  );

  const logOut = () => {
    dispatch(setLogOut());
  };

  useEffect(() => {
    if (!isNil(currentUser)) {
      if (currentUser!.idDevice === "") {
        console.log("navigate to linkDevice");
        router.push(RoutesEnum.LINK_DEVICE);
      }
    }
  });

  return { logOut, isLoggedIn };
};
