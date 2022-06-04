import { Box, TextField } from "@mui/material";
import React, { ChangeEvent } from "react";
import { generalStyles } from "../../../Screens/Login/Login.styles";
import { userInputStyle } from "../UserInput/UserInput.styles";
import { IEmailInputProps } from "./EmailInput.interfaces";

export const EmailInput = ({
  setNewEmail,
  error,
  errorText,
  value,
}: IEmailInputProps) => {
  return (
    <Box
      textAlign={"center"}
      sx={{ ...userInputStyle.container, marginBottom: error ? 2 : 0 }}
    >
      <TextField
        error={error}
        sx={generalStyles.TextFieldMainStyle}
        id="User-input"
        label="Correo Electrónico"
        value={value}
        variant="outlined"
        helperText={errorText}
        onChange={(
          event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => {
          setNewEmail(event.target.value);
        }}
      />
    </Box>
  );
};
