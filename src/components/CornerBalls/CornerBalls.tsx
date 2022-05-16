import { Box } from "@mui/material";
import React from "react";
import { cornerStyles } from "./CornerBalls.styles";

export const CornerBalls = () => {
  return (
    <Box sx={cornerStyles.container}>
      <Box sx={cornerStyles.ballOne} />
      <Box sx={cornerStyles.ballTwo} />
    </Box>
  );
};
