import { Grid, Typography } from "@mui/material";
import React from "react";
import { MainButton } from "../Buttons/MainButton/MainButton";
import { PassInput } from "../Inputs/PassInput/PassInput";
import { UserInput } from "../Inputs/UserInput/UserInput";
import { RegisterText } from "../Texts/RegisterText/RegisterText";

export const LoginForm = () => {
  return (
    <Grid
      container
      flexDirection={"column"}
      justifyContent={"center"}
      sx={{ marginTop: 5 }}
    >
      <Grid item>
        <UserInput />
      </Grid>
      <Grid item>
        <PassInput />
      </Grid>
      <Grid textAlign={"center"} item>
        <MainButton />
        <RegisterText />
      </Grid>
    </Grid>
  );
};
