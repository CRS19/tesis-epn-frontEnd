import React, { ChangeEvent } from "react";
import { Box, TextField } from "@mui/material";
import { generalStyles } from "../../../Screens/Login/Login.styles";
import { userInputStyle } from "./UserInput.styles";
import { IUserInputProps } from "./UserInput.interfaces";

export const UserInput = ({ setEmail }: IUserInputProps) => {
  return (
    <Box textAlign={"center"} sx={userInputStyle.container}>
      <TextField
        sx={generalStyles.TextFieldMainStyle}
        id="User-input"
        label="Ingrese email"
        variant="outlined"
        onChange={(
          event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => {
          setEmail(event.target.value);
        }}
      />
    </Box>
  );
};
