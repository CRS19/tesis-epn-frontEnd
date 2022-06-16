import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../Hooks/useAppHooks";
import { useAuth } from "../../../Hooks/useAuth";
import {
  IErrorFormLinkDevice,
  IUseLinkDevice,
} from "./useLinkDevice.interfaces";
import { get, isNil } from "lodash";
import { linkDevice } from "../../../store/actionCreators/actionCreators";

export const useLinkDevice = (): IUseLinkDevice => {
  const dispatch = useAppDispatch();
  const { isLoggedIn } = useAuth();
  const { currentUser, isLoading = false } = useAppSelector(
    (store) => store.generalReducer!
  );

  const [idDevice, setIdDevice] = useState<string>("");
  const [errorForm, setErrorForm] = useState<IErrorFormLinkDevice>({
    error: false,
    textError: "",
  });

  const handleInputIdDevice = (idDevice: string) => {
    setIdDevice(idDevice);
  };

  const checkIdDeviceCurrentUser = () =>
    get(currentUser, "idDevice", "") === "" ? false : true;

  const validateIdDevice = () => {
    const isValid = idDevice === "" ? false : true;
    if (!isValid) {
      setErrorForm({ textError: "El id no puede ser vacio", error: true });
      return;
    }

    setErrorForm({ textError: "", error: false });

    return isValid;
  };

  const onSubmit = () => {
    if (!isNil(currentUser)) {
      if (!checkIdDeviceCurrentUser() && validateIdDevice()) {
        dispatch(linkDevice(currentUser!.mail, idDevice));
        return;
      }

      if (checkIdDeviceCurrentUser()) {
        dispatch(linkDevice(currentUser!.mail, ""));
      }
    }
  };

  return {
    errorForm,
    isLoading,
    isLoggedIn,
    idDevice,
    currentUserHasIdDevice: checkIdDeviceCurrentUser(),
    handleInputIdDevice,
    onSubmit,
  };
};
