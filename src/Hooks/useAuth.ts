import { useRouter } from "next/router";
import { useEffect } from "react";
import { RoutesEnum } from "../Shared/Enums/Routes";
import { checkAuthToken } from "../store/actionCreators/actionCreators";
import { useAppDispatch, useAppSelector } from "./useAppHooks";

export const useAuth = () => {
  const route = useRouter();
  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector(
    (store) => store.generalReducer.isLoggedIn!
  );

  useEffect(() => {
    dispatch(checkAuthToken());
    if (!isLoggedIn) {
      route.push(RoutesEnum.LOGIN);
    }
  }, [isLoggedIn]);
};
