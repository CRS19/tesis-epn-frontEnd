import { Box, Typography } from "@mui/material";
import React from "react";
import { ILoginTextProps } from "./LoginText.interfaces";
import { loginTextStyles } from "./LoginText.styles";

export const LoginText = ({ changeRegisterFormToLogin }: ILoginTextProps) => {
  return (
    <Box sx={loginTextStyles.container}>
      <Typography sx={loginTextStyles.text}>¡Ya tengo una cuenta!</Typography>{" "}
      <Typography
        sx={loginTextStyles.registerText}
        onClick={changeRegisterFormToLogin}
      >
        Iniciar Sesión
      </Typography>
    </Box>
  );
};
