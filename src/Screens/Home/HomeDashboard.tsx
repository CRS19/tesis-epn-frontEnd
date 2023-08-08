import React from "react";
import { MainButton } from "../../components/Buttons/MainButton/MainButton";
import {
  Backdrop,
  Box,
  CircularProgress,
  Grid,
  Typography,
  Zoom,
} from "@mui/material";
import { loginStyles } from "../Login/Login.styles";
import { TopBar } from "../../components/TopHeaderBar/TopBar";
import { useHome } from "./state/useHome";
import { Footer } from "../../components/Footer/Footer";
import { NodesGraph } from "../../components/NodesGraph/NodesGraph";
import { get } from "lodash";
import { homeStyles } from "./HomeDashboard.styles";
import { BackgroundHomeScreen } from "../../components/Backgrounds/BackgroundHomeScreen";
import { HomeImage } from "../../../public/assets/svg/HomeImage";
import { linkDeviceFormStyles } from "../../components/LinkDeviceForm/LinkDeviceForm.styles";
import { SickModal } from "../../components/Modals/SickModal/SickModal";
import { AlertCard } from "../../components/Cards/AlertCard/AlertCard";
import { PosibleSickModal } from "../../components/Modals/PosibleSickModal/PosibleSickModal";
import { SnackBarAlert } from "../../components/Alert/SnackBarAlert";

export const HomeDashboard = () => {
  const {
    isLoggedIn,
    isLoading,
    currentUser,
    sickModalPorps,
    HealthModalProps,
    alertSickModalProps,
    openHealthModal,
    openSickModal,
    openAlertSickModal,
  } = useHome();

  return (
    <>
      {isLoggedIn && (
        <>
          <TopBar />
          <BackgroundHomeScreen />
          <Grid display="flex" container>
            <Grid
              display="flex"
              flexDirection={"column"}
              item
              xs={12}
              lg={6}
              sx={{
                alignItems: "center",
                textAlign: "center",
                bgcolor: "rgba(119, 164, 220, 0.13)",
              }}
            >
              {get(currentUser, "isPossibleSick", false) && (
                <Zoom in timeout={1000}>
                  <Box sx={{ width: "75%" }}>
                    <AlertCard onClick={openAlertSickModal} />
                  </Box>
                </Zoom>
              )}
              <HomeImage />
              <Typography
                sx={{
                  ...linkDeviceFormStyles.title,
                  fontSize: "100px",
                  lineHeight: "90px",
                  marginTop: "15px",
                }}
              >
                prevengamos la propagación
              </Typography>
              <Typography sx={homeStyles.subTitle}>
                Manten una distancia segura. Toma las precauciones adecuadas e
                infórmate bien para protegerte y cuidar de quienes te rodean.
              </Typography>
            </Grid>
            <Grid
              display="flex"
              flexDirection={"column"}
              item
              xs={12}
              lg={6}
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography sx={homeStyles.contactsTitle}>
                Contactos <br />
                de proximidad
              </Typography>
              <NodesGraph idDevice={get(currentUser, "idDevice", "")} />
              {!get(currentUser, "isSick", false) ? (
                <Box sx={{ marginBottom: 2 }}>
                  <MainButton
                    onClick={openSickModal}
                    btnText="Reportase enfermo"
                    hasMarginTop={false}
                    borderRadius={true}
                  />
                </Box>
              ) : (
                <Box sx={{ marginBottom: 2 }}>
                  <MainButton
                    onClick={openHealthModal}
                    btnText="Reportarse Sano"
                    hasMarginTop={false}
                    borderRadius={true}
                  />
                </Box>
              )}
            </Grid>
          </Grid>
          <Backdrop sx={loginStyles.circleLoader} open={isLoading}>
            <CircularProgress color="inherit" />
          </Backdrop>
          <SickModal {...sickModalPorps} />
          <SickModal {...HealthModalProps} />
          <PosibleSickModal {...alertSickModalProps} />
          <SnackBarAlert />
          <Footer hasExtraHeight={false} />
        </>
      )}
    </>
  );
};
