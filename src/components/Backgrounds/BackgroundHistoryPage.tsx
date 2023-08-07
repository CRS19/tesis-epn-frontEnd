import React from "react";
import { Box } from "@mui/material";
import { HistoryBackground } from "../../../public/assets/svg/HistoryBackground";
import { backgroundLinkStyles } from "./BackgroundLinkDevice.styles";

export const BackgroundHistoryPage = () => {
  return (
    <Box sx={backgroundLinkStyles.container}>
      <HistoryBackground />
    </Box>
  );
};
