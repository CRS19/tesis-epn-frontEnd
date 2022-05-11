import React from "react";
import { Button } from "@mui/material";
import { loginStyles } from "./Login.styles";

export default function Login() {
  const envVariable = process.env.NEXT_PUBLIC_EL_PEPE_VARIBALE;

  return (
    <div>
      <p>Hola mundo</p>
      <p>{envVariable}</p>
      <Button variant="text">Text</Button>
      <Button variant="contained" sx={loginStyles.cutomButtomStyle}>
        Contained
      </Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
}
