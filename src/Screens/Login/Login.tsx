import React from "react";
import { Button } from "@mui/material";
import { loginStyles } from "./Login.styles";
import { useLogin } from "./state/useLogin";

export default function Login() {
  const { envVariable, changeText, text } = useLogin();

  return (
    <div>
      <p>Hola mundo</p>
      <p>{envVariable}</p>
      <Button variant="text">{text}</Button>
      <Button
        variant="contained"
        sx={loginStyles.cutomButtomStyle}
        onClick={() => changeText("WORKS")}
      >
        Contained
      </Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
}
