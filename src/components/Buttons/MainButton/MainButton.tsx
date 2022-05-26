import React from "react";
import { Box, Button } from "@mui/material";
import { cornerStyles } from "./MainButton.styles";

import { IMainButtonProps } from "./MainButton.interfaces";

export const MainButton = ({ onClick, btnText }: IMainButtonProps) => {
  return (
    <Box textAlign={"center"} sx={cornerStyles.container}>
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
