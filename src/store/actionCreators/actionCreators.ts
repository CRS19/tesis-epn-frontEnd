import { useAppSelector } from "../../Hooks/useAppHooks";
import { changeTestText, IAppState } from "../reducer/reducer";
import { AppThunk } from "../store";

export type IAppAction = {
  type: string;
} & IAppState;

export const getTestText =
  (text: string): AppThunk =>
  (dispatch, getState) => {
    dispatch(changeTestText(text));
  };
