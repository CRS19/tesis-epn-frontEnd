import React from "react";
import { Box } from "@mui/material";
import { BackgroundShapes } from "../../../public/assets/svg/BackgroundShapes";
import { backgroundLinkStyles } from "./BackgroundLinkDevice.styles";

export const BackgroundLinkDevice = () => {
  return (
    <Box sx={backgroundLinkStyles.container}>
      <BackgroundShapes />
    </Box>
  );
};
