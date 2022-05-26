import { Box, Typography } from "@mui/material";
import React from "react";
import { registerStyle } from "./RegisterText.styles";

export const RegisterText = () => {
  return (
    <Box sx={registerStyle.container}>
      <Typography sx={registerStyle.text}>¿No tiene una cuenta? </Typography>{" "}
      <Typography
        sx={registerStyle.registerText}
        onClick={() => console.log("change page")}
      >
        Registrarse
      </Typography>
    </Box>
  );
};
