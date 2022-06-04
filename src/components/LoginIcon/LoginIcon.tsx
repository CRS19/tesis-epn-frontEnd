import { Box, Grid } from "@mui/material";
import React from "react";
import Image from "next/image";
import { loginIconStyles } from "./LoginIcon.styles";

export const LoginIcon = () => {
  return (
    <Grid container justifyContent={"center"}>
      <Grid item>
        <Box sx={loginIconStyles.iconStyle}>
          <img
            src="../../../icons/LoginIcon.svg"
            height={"206px"}
            width={"267x"}
          />
        </Box>
      </Grid>
    </Grid>
  );
};
