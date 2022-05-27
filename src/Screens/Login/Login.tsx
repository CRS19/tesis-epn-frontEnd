import React from "react";
import { Backdrop, Box, CircularProgress, Grid } from "@mui/material";
import { generalStyles, loginStyles } from "./Login.styles";
import { useLogin } from "./state/useLogin";
import { CornerBalls } from "../../components/CornerBalls/CornerBalls";
import { IconsHeader } from "../../components/IconsHeader/IconsHeader";
import { LoginIcon } from "../../components/LoginIcon/LoginIcon";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { SnackBarAlert } from "../../components/Alert/SnackBarAlert";
import { LoginWallpaper } from "../../components/LoginWallpaper/LoginWallpaper";

export default function Login() {
  const { isLoading, login, loginFormActions } = useLogin();

  return (
    <Box sx={generalStyles.PageContainer}>
      <CornerBalls />
      <Grid container>
        <Grid item sx={loginStyles.LogInFormContainer}>
          <Box sx={{ opacity: "100%" }}>
            <IconsHeader />
            <LoginIcon />
            <LoginForm login={login} loginFormActions={loginFormActions} />
          </Box>
        </Grid>
        <Grid item sx={loginStyles.IlustrationContainer}>
          <LoginWallpaper />
        </Grid>
      </Grid>
      <SnackBarAlert />
      <Backdrop sx={loginStyles.circleLoader} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
}
