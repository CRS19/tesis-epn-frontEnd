import { Box, Divider, Grid } from "@mui/material";
import React from "react";
import {
  EPN_LOGO_PORCENTAGE,
  getHeightEPNlogo,
} from "../../../Shared/Contants/General";
import { RoutesEnum } from "../../../Shared/Enums/Routes";
import { Avatar } from "../../Avatar/Avatar";
import { NavigationButtom } from "../../NavigationButtom/NavigationButtom";
import { IWebTopBarProps } from "./WebTopBar.interfaces";

export const WebTopBar = ({ width }: IWebTopBarProps) => {
  return (
    <>
      <Grid container>
        <Grid item xs={1.3}>
          <Box
            display={"flex"}
            sx={{ justifyContent: "center", alignItems: "center" }}
            height={113}
          >
            <img
              height={getHeightEPNlogo(width)}
              width={`${width * EPN_LOGO_PORCENTAGE}`}
              src="../../../assets/EPN-text-logo.png"
            />
          </Box>
        </Grid>
        <Grid display={"flex"} item xs={10} flexDirection={"row"}>
          <Divider
            orientation="vertical"
            sx={{
              bgcolor: "#002467",
              maxHeight: "100px",
              width: "8px",
              marginTop: 1,
            }}
          />
          <NavigationButtom
            path={RoutesEnum.HOME}
            title="Home"
            navigateTo={RoutesEnum.HOME}
            windowWidth={width}
            width="9%"
          />
          <NavigationButtom
            path={RoutesEnum.HISTORY}
            title="Historial"
            navigateTo={RoutesEnum.HISTORY}
            windowWidth={width}
            width="14%"
          />
          <NavigationButtom
            path={RoutesEnum.RECOMENDATIONS}
            title="Recomendaciones"
            navigateTo={RoutesEnum.RECOMENDATIONS}
            windowWidth={width}
            width="25%"
          />
          <NavigationButtom
            path={RoutesEnum.LINK_DEVICE}
            title="Desvincular"
            navigateTo={RoutesEnum.LINK_DEVICE}
            windowWidth={width}
            width="17%"
          />
        </Grid>
        <Grid
          display={"flex"}
          sx={{ justifyContent: "center", alignItems: "center" }}
          item
          xs={0.7}
        >
          <Avatar />
        </Grid>
      </Grid>
      <Divider sx={{ bgcolor: "#425774" }} />
    </>
  );
};
