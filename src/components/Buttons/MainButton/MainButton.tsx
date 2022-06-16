import React from "react";
import { Box, Button } from "@mui/material";
import { cornerStyles, getContainerProps } from "./MainButton.styles";

import { IMainButtonProps } from "./MainButton.interfaces";

export const MainButton = ({
  onClick,
  btnText,
  hasMarginTop = true,
  borderRadius = false,
}: IMainButtonProps) => {
  return (
    <Box textAlign={"center"} sx={getContainerProps(hasMarginTop).container}>
      <Button
        variant="contained"
        sx={
          !borderRadius
            ? cornerStyles.mainButtonStyle
            : cornerStyles.borderRadiusStyle
        }
        onClick={onClick}
      >
        {btnText}
      </Button>
    </Box>
  );
};
