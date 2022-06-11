import { useRouter } from "next/router";
import { useEffect } from "react";
import { getUser } from "../../utility/localStorage-utils";
import { RoutesEnum } from "../Shared/Enums/Routes";
import { checkAuthToken } from "../store/actionCreators/actionCreators";
import { setCurrentUser } from "../store/reducer/reducer";
import { useAppDispatch, useAppSelector } from "./useAppHooks";
import { isNil } from "lodash";
import { IUseAuth } from "../Shared/Interfaces/useAuth.interfaces";
import { IUser } from "../Shared/Interfaces/User.interfaces";

export const useAuth = (): IUseAuth => {
  const route = useRouter();
  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector(
    (store) => store.generalReducer.isLoggedIn!
  );
  const currentUser = useAppSelector(
    (store) => store.generalReducer.currentUser!
  );

  useEffect(() => {
    dispatch(checkAuthToken());
    if (!isLoggedIn) {
      route.push(RoutesEnum.LOGIN);
    } else {
      if (isNil(currentUser)) {
        const currentUser = getUser();
        dispatch(setCurrentUser(currentUser as IUser));
      }
    }
  }, [isLoggedIn]);

  return { isLoggedIn };
};
