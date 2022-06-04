import { Box, Typography } from "@mui/material";
import React from "react";
import { IRegisterTextProps } from "./RegisterText.interfaces";
import { registerStyle } from "./RegisterText.styles";

export const RegisterText = ({
  changeLoginFormToRegister,
}: IRegisterTextProps) => {
  return (
    <Box sx={registerStyle.container}>
      <Typography sx={registerStyle.text}>¿No tiene una cuenta? </Typography>{" "}
      <Typography
        sx={registerStyle.registerText}
        onClick={changeLoginFormToRegister}
      >
        Registrarse
      </Typography>
    </Box>
  );
};
