import React from "react";
import { Box, Button } from "@mui/material";
import { cornerStyles } from "./MainButton.styles";

export const MainButton = () => {
  return (
    <Box textAlign={"center"} sx={cornerStyles.container}>
      <Button variant="contained" sx={cornerStyles.mainButtonStyle}>
        Ingresar al sistema
      </Button>
    </Box>
  );
};
