import { Box } from "@mui/material";
import React from "react";
import { HomeBackground } from "../../../public/assets/svg/HomeBackground";
import { backgroundLinkStyles } from "./BackgroundLinkDevice.styles";

export const BackgroundHomeScreen = () => {
  return (
    <Box sx={backgroundLinkStyles.container}>
      <HomeBackground />
    </Box>
  );
};
