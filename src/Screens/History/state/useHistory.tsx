import { useEffect } from "react";
import { useAuth } from "../../../Hooks/useAuth";
import { useAppDispatch, useAppSelector } from "../../../Hooks/useAppHooks";
import { getContacts } from "../../../store/actionCreators/actionCreators";

export const useHistory = () => {
  const { isLoggedIn } = useAuth();
  const dispatch = useAppDispatch();

  const contacts = useAppSelector((state) => state.generalReducer.contacts!);

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  return { isLoggedIn, contacts };
};
