import { Box, TextField } from "@mui/material";
import React, { ChangeEvent } from "react";
import { passInputStyles } from "../PassInput/PassInput.styles";
import { IdDeviceInputProps } from "./IdDeviceInput.interfaces";

export const IdDeviceInput = ({
  error,
  value,
  errorText,
  vinculateDevice,
}: IdDeviceInputProps) => {
  return (
    <Box textAlign={"center"} sx={passInputStyles.container}>
      <TextField
        error={error}
        sx={passInputStyles.TextFieldMainStyle}
        id="Password-input"
        label="Ingrese Código"
        variant="outlined"
        value={value}
        helperText={errorText}
        onChange={(
          event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => {
          vinculateDevice(event.target.value);
        }}
      ></TextField>
    </Box>
  );
};
