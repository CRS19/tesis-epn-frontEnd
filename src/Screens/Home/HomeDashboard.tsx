import React from "react";
import { MainButton } from "../../components/Buttons/MainButton/MainButton";
import {
  Backdrop,
  Box,
  CircularProgress,
  Grid,
  Typography,
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

export const HomeDashboard = () => {
  const { logOut, isLoggedIn, currentUser } = useHome();

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
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography>elpepe</Typography>
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
              <Typography sx={homeStyles.contactsTitle}>Contactos</Typography>
              <NodesGraph idDevice={get(currentUser, "idDevice", "")} />
            </Grid>
            <Grid xs={12}>
              <Box>
                <MainButton
                  onClick={() => console.log("elpepe click")}
                  btnText="Reportase enfermo"
                  hasMarginTop={false}
                  borderRadius={true}
                />
              </Box>
            </Grid>
          </Grid>
          <Backdrop sx={loginStyles.circleLoader} open={false}>
            <CircularProgress color="inherit" />
          </Backdrop>
          <Footer />
        </>
      )}
    </>
  );
};
