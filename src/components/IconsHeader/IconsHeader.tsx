import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { iconsHeaderStyles } from "./IconsHeader.styles";

export const IconsHeader = () => {
  return (
    <Grid
      container
      flexDirection={"row"}
      justifyContent={"end"}
      sx={iconsHeaderStyles.container}
    >
      <Box>
        <img
          src="../../../assets/FIS-logo.png"
          height={"173px"}
          width={"163px"}
        />
      </Box>
      <Box>
        <img
          src="../../../assets/EPN-logo.png"
          height={"173px"}
          width={"163px"}
        />
      </Box>
    </Grid>
  );
};
