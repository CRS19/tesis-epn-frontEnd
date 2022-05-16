import React from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import { generalStyles, loginStyles } from "./Login.styles";
import { useLogin } from "./state/useLogin";
import { CornerBalls } from "../../components/CornerBalls/CornerBalls";
import { IconsHeader } from "../../components/IconsHeader/IconsHeader";
import { LoginIcon } from "../../components/LoginIcon/LoginIcon";
import { LoginForm } from "../../components/LoginForm/LoginForm";

export default function Login() {
  const { envVariable, changeText } = useLogin();

  // TODO: cambiar el texto
  changeText("");
  return (
    <Box sx={generalStyles.PageContainer}>
      <CornerBalls />
      <Grid container>
        <Grid item sx={loginStyles.LogInFormContainer}>
          <Box sx={{ opacity: "100%" }}>
            <IconsHeader />
            <LoginIcon />
            <LoginForm />
          </Box>
        </Grid>
        <Grid item sx={loginStyles.IlustrationContainer}></Grid>
      </Grid>
    </Box>
  );
}
