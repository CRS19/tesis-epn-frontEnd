import { ISnackBarMessage } from "./../../Shared/Interfaces/SnackBar.interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../Shared/Interfaces/User.interfaces";
import { INITIAL_SNACK_BAR } from "../../Shared/Contants/InitialSnackBarConfig";

export interface IAppState {
  messageText?: string;
  isLoggedIn?: boolean;
  isLoading?: boolean;
  currentUser?: IUser;
  snackBarConfig?: ISnackBarMessage;
}

export const DEFAULT_STATE: IAppState = {
  messageText: "init",
  isLoggedIn: false,
  isLoading: false,
  currentUser: undefined,
  snackBarConfig: INITIAL_SNACK_BAR,
};

export const generalReducer = createSlice({
  name: "generalReducer",
  initialState: DEFAULT_STATE,
  reducers: {
    changeTestText: (state, action: PayloadAction<string>) => {
      state.messageText = action.payload;
    },

    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },

    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },

    setCurrentUser: (state, action: PayloadAction<IUser>) => {
      state.currentUser = action.payload;
    },

    setSnackBarMessage: (state, action: PayloadAction<ISnackBarMessage>) => {
      state.snackBarConfig = action.payload;
    },
  },
});

export const {
  changeTestText,
  setIsLoggedIn,
  setIsLoading,
  setCurrentUser,
  setSnackBarMessage,
} = generalReducer.actions;

export default generalReducer.reducer;
