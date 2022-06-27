import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { cornerStyles, getContainerProps } from "./MainButton.styles";

import { IMainButtonProps } from "./MainButton.interfaces";

export const MainButton = ({
  onClick,
  btnText,
  hasMarginTop = true,
  borderRadius = false,
  width = undefined,
  variant = "primary",
}: IMainButtonProps) => {
  return variant === "primary" ? (
    <Box textAlign={"center"} sx={getContainerProps(hasMarginTop).container}>
      <Button
        variant="contained"
        sx={
          !borderRadius
            ? { ...cornerStyles.mainButtonStyle, width }
            : { ...cornerStyles.borderRadiusStyle, width }
        }
        onClick={onClick}
      >
        {btnText}
      </Button>
    </Box>
  ) : (
    <Box textAlign={"center"} sx={getContainerProps(hasMarginTop).container}>
      <Button
        variant="contained"
        sx={
          !borderRadius
            ? {
                ...cornerStyles.mainButtonStyle,
                width,
                bgcolor: "#F0F0F0",
                ":hover": { bgcolor: "#EDF3FA" },
              }
            : {
                ...cornerStyles.borderRadiusStyle,
                width,
                bgcolor: "#F0F0F0",
                ":hover": { bgcolor: "#EDF3FA" },
              }
        }
        onClick={onClick}
      >
        <Typography sx={{ fontSize: "14px", color: "#0E2240" }}>
          {btnText}
        </Typography>
      </Button>
    </Box>
  );
};
