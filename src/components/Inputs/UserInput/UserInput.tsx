import React from "react";
import { Box, TextField } from "@mui/material";
import { generalStyles } from "../../../Screens/Login/Login.styles";
import { userInputStyle } from "./UserInput.styles";

export const UserInput = () => {
  return (
    <Box textAlign={"center"} sx={userInputStyle.container}>
      <TextField
        sx={generalStyles.TextFieldMainStyle}
        id="outlined-basic"
        label="Ingrese email"
        variant="outlined"
      />
    </Box>
  );
};
