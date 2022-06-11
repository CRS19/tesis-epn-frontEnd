import { Grid, Typography } from "@mui/material";
import React from "react";
import { MainButton } from "../Buttons/MainButton/MainButton";
import { PassInput } from "../Inputs/PassInput/PassInput";
import { UserInput } from "../Inputs/UserInput/UserInput";
import { RegisterText } from "../Texts/RegisterText/RegisterText";
import { ILoginFormProps } from "./LoginForm.interfaces";

export const LoginForm = ({ login, loginFormActions }: ILoginFormProps) => {
  return (
    <Grid
      container
      flexDirection={"column"}
      justifyContent={"center"}
      sx={{ marginTop: 5 }}
    >
      <Grid item>
        <UserInput setEmail={loginFormActions.setEmail} />
      </Grid>
      <Grid item>
        <PassInput login={login} setPassword={loginFormActions.setPassword} />
      </Grid>
      <Grid textAlign={"center"} item>
        <MainButton btnText="Ingresar al sistema" onClick={login} />
        <RegisterText {...loginFormActions} />
      </Grid>
    </Grid>
  );
};
