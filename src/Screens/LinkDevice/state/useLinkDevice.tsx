import { useAuth } from "../../../Hooks/useAuth";
import { IUseLinkDevice } from "./useLinkDevice.interfaces";

export const useLinkDevice = (): IUseLinkDevice => {
  const { isLoggedIn } = useAuth();

  return { isLoggedIn };
};
