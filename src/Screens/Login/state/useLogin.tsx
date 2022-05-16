import React from "react";
import { useAppDispatch, useAppSelector } from "../../../Hooks/useAppHooks";
import { getTestText } from "../../../store/actionCreators/actionCreators";

export const useLogin = () => {
  const envVariable = process.env.NEXT_PUBLIC_EL_PEPE_VARIBALE;
  const dispatch = useAppDispatch();
  //const text = useAppSelector((store) => store.generalReducer.messageText!);

  const changeText = (text: string) => {
    dispatch(getTestText(text));
  };

  return { envVariable, changeText };
};
