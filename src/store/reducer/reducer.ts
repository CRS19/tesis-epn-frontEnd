import { IGraphData } from "./../../components/NodesGraph/NodesGraph.interfaces";
import { RoutesEnum } from "./../../Shared/Enums/Routes";
import { ISnackBarMessage } from "./../../Shared/Interfaces/SnackBar.interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../Shared/Interfaces/User.interfaces";
import { INITIAL_SNACK_BAR } from "../../Shared/Contants/InitialSnackBarConfig";
import { IContacts } from "../../Shared/Interfaces/IContacts.interfaces";

export interface IAppState {
  messageText?: string;
  isLoggedIn?: boolean;
  isLoading?: boolean;
  currentUser?: IUser;
  snackBarConfig?: ISnackBarMessage;
  currentPath?: RoutesEnum;
  graphData?: IGraphData;
  contacts?: IContacts[];
}

export const DEFAULT_STATE: IAppState = {
  messageText: "init",
  isLoggedIn: false,
  isLoading: false,
  currentUser: undefined,
  snackBarConfig: INITIAL_SNACK_BAR,
  graphData: { nodes: [], links: [] },
  contacts: [],
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

    setGraphData: (state, action: PayloadAction<IGraphData>) => {
      state.graphData = action.payload;
    },

    setContacts: (state, action: PayloadAction<IContacts[]>) => {
      state.contacts = action.payload;
    },
  },
});

export const {
  changeTestText,
  setIsLoggedIn,
  setIsLoading,
  setCurrentUser,
  setSnackBarMessage,
  setGraphData,
  setContacts,
} = generalReducer.actions;

export default generalReducer.reducer;
