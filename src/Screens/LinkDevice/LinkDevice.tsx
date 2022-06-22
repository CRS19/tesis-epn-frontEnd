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
import { Footer } from "../../components/Footer/Footer";

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
          <Footer />
        </>
      )}
    </>
  );
};
