import React from "react";
import { Box, Button } from "@mui/material";
import { cornerStyles, getContainerProps } from "./MainButton.styles";

import { IMainButtonProps } from "./MainButton.interfaces";

export const MainButton = ({
  onClick,
  btnText,
  hasMarginTop = true,
}: IMainButtonProps) => {
  return (
    <Box textAlign={"center"} sx={getContainerProps(hasMarginTop).container}>
      <Button
        variant="contained"
        sx={cornerStyles.mainButtonStyle}
        onClick={onClick}
      >
        {btnText}
      </Button>
    </Box>
  );
};
