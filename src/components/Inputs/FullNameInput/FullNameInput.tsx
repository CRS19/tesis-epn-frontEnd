import { Box, TextField } from "@mui/material";
import React, { ChangeEvent } from "react";
import { generalStyles } from "../../../Screens/Login/Login.styles";
import { userInputStyle } from "../UserInput/UserInput.styles";
import { IFullNameInputProps } from "./FullNameInput.interfaces";

export const FullNameInput = ({
  setFullName,
  error,
  errorText,
  value,
}: IFullNameInputProps) => {
  return (
    <Box
      textAlign={"center"}
      sx={{ ...userInputStyle.container, marginBottom: error ? 2 : 0 }}
    >
      <TextField
        error={error}
        sx={generalStyles.TextFieldMainStyle}
        id="User-input"
        label="Nombres y Apellidos"
        value={value}
        variant="outlined"
        helperText={errorText}
        onChange={(
          event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => {
          setFullName(event.target.value);
        }}
      />
    </Box>
  );
};
