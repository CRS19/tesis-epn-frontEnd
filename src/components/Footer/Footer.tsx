import { Box, Typography } from "@mui/material";
import React from "react";
import { IFooterProps } from "./Footer.interfaces";

export const Footer = ({ hasExtraHeight = true }: IFooterProps) => {
  return (
    <>
      {hasExtraHeight && <Box sx={{ height: "85px" }} />}
      <Box
        sx={{
          bgcolor: "#0E2240",
          height: "80px",
          width: "100%",
        }}
      >
        <Box sx={{ height: "30px" }} />
        <Typography
          sx={{
            display: "flex",
            color: "white",
            justifyContent: "center",
            alignContent: "center",
            textAlign: "center",
          }}
        >
          © 2022 DISTANCIAMIENTO SOCIAL FIS.
          <br /> All rights reserved
        </Typography>
      </Box>
    </>
  );
};
