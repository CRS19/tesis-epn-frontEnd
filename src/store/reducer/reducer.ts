import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAppState {
  messageText?: string;
}

export const DEFAULT_STATE: IAppState = {
  messageText: "init",
};

export const generalReducer = createSlice({
  name: "generalReducer",
  initialState: DEFAULT_STATE,
  reducers: {
    changeTestText: (state, action: PayloadAction<string>) => {
      state.messageText = action.payload;
    },
  },
});

export const { changeTestText } = generalReducer.actions;

export default generalReducer.reducer;
