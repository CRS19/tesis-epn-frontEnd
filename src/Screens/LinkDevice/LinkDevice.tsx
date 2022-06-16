import React from "react";
import { Backdrop, CircularProgress, Grid } from "@mui/material";
import { BackgroundLinkDevice } from "../../components/Backgrounds/BackgroundLinkDevice";
import { TopBar } from "../../components/TopHeaderBar/TopBar";
import { useLinkDevice } from "./state/useLinkDevice";
import { KeepDistanceSVG } from "../../../public/assets/svg/KeepDistanceSVG";
import { LinkDeviceForm } from "../../components/LinkDeviceForm/LinkDeviceForm";
import Head from "next/head";
import { SnackBarAlert } from "../../components/Alert/SnackBarAlert";
import { loginStyles } from "../Login/Login.styles";

export const LinkDevice = () => {
  const {
    idDevice,
    errorForm,
    isLoading,
    onSubmit,
    isLoggedIn,
    currentUserHasIdDevice,
    handleInputIdDevice,
  } = useLinkDevice();

  return (
    <>
      {isLoggedIn && (
        <>
          <Head>
            <title>Vincular Dispositivo</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@100&display=swap"
              rel="stylesheet"
            />
          </Head>
          <TopBar />
          <BackgroundLinkDevice />
          <Grid container>
            <Grid item xs={12} md={6}>
              <LinkDeviceForm
                idDevice={idDevice}
                errorForm={errorForm}
                onSubmit={onSubmit}
                hasIdDevice={currentUserHasIdDevice}
                handleInputIdDevice={handleInputIdDevice}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <KeepDistanceSVG />
            </Grid>
          </Grid>
          <SnackBarAlert />
          <Backdrop sx={loginStyles.circleLoader} open={isLoading}>
            <CircularProgress color="inherit" />
          </Backdrop>
        </>
      )}
    </>
  );
};
