import { get, isNil } from "lodash";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../Hooks/useAppHooks";
import { useAuth } from "../../../Hooks/useAuth";
import { useSocket } from "../../../Hooks/useSocket";
import { RoutesEnum } from "../../../Shared/Enums/Routes";
import {
  getUser,
  updateIsSick,
} from "../../../store/actionCreators/actionCreators";
import { IUseHome } from "./useHome.interfaces";

export const useHome = (): IUseHome => {
  const socket = useSocket()!;
  const router = useRouter();
  const { isLoggedIn } = useAuth();
  const dispatch = useAppDispatch();
  const { currentUser, isLoading } = useAppSelector((store) => ({
    currentUser: store.generalReducer.currentUser!,
    isLoading: store.generalReducer.isLoading!,
  }));
  const [isOpenSickModal, setIsOpenSickModal] = useState<boolean>(false);
  const [isOpenHealthModal, setOpenHealthModal] = useState<boolean>(false);

  const [isOpenAlertSickModal, setOpenAlertSickModal] =
    useState<boolean>(false);

  const closeAlertSickModal = () => {
    setOpenAlertSickModal(false);
  };

  const openAlertSickModal = () => {
    setOpenAlertSickModal(true);
  };

  const closeHealthModal = () => {
    setOpenHealthModal(false);
  };

  const openHealthModal = () => {
    setOpenHealthModal(true);
  };

  const setHealth = () => {
    dispatch(updateIsSick(false, get(currentUser, "mail", "")));

    setOpenHealthModal(false);
  };

  const closeSickModal = () => {
    setIsOpenSickModal(false);
  };

  const openSickModal = () => {
    setIsOpenSickModal(true);
  };

  const setSick = () => {
    dispatch(updateIsSick(true, get(currentUser, "mail", "")));

    setIsOpenSickModal(false);
  };

  useEffect(() => {
    if (!isNil(currentUser)) {
      if (currentUser!.idDevice === "") {
        router.push(RoutesEnum.LINK_DEVICE);
      }
    }
  });

  useEffect(() => {
    /* istanbul ignore next */
    function reloadUser(payload: any) {
      dispatch(getUser(currentUser.mail!));
    }
    /* istanbul ignore next */
    if (socket) {
      socket.on("elpepeResponse", reloadUser);
    }
  }, [socket]);

  return {
    isLoggedIn,
    currentUser,
    isLoading,
    sickModalPorps: {
      title: "Resultado positivo para Covid 19.",
      subTitle: "¿Ha resultado positivo en una prueba de COVID-19?",
      isOpen: isOpenSickModal,
      onClose: closeSickModal,
      onYesPress: setSick,
    },
    HealthModalProps: {
      title: "Reportarse Sano",
      subTitle: "¿Ha resultado negativo en una prueba de COVID-19?",
      isOpen: isOpenHealthModal,
      onClose: closeHealthModal,
      onYesPress: setHealth,
    },
    alertSickModalProps: {
      isOpen: isOpenAlertSickModal,
      onClose: closeAlertSickModal,
    },
    openAlertSickModal,
    openHealthModal,
    openSickModal,
  };
};
