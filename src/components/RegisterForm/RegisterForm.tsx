import { Grid } from "@mui/material";
import React from "react";
import { MainButton } from "../Buttons/MainButton/MainButton";
import { EmailInput } from "../Inputs/EmailInput/EmailInput";
import { FullNameInput } from "../Inputs/FullNameInput/FullNameInput";
import { NewPasswordInput } from "../Inputs/NewPasswordInput/NewPasswordInput";
import { LoginText } from "../Texts/LoginText/LoginText";
import { IRegisterFormProps } from "./RegisterForm.interfaces";
import { registerFormStyles } from "./RegisterForm.styles";

export const RegisterForm = ({ registerFormActions }: IRegisterFormProps) => {
  return (
    <Grid
      container
      flexDirection={"column"}
      justifyContent={"center"}
      sx={{ marginTop: 2 }}
    >
      <Grid item sx={registerFormStyles.inputContainer}>
        <FullNameInput {...registerFormActions.fullNameInputProps} />
      </Grid>
      <Grid item sx={registerFormStyles.inputContainer}>
        <EmailInput {...registerFormActions.emailInputProps} />
      </Grid>
      <Grid item sx={registerFormStyles.inputContainer}>
        <NewPasswordInput {...registerFormActions.newPasswordProps} />
      </Grid>
      <Grid item sx={registerFormStyles.inputContainer}>
        <NewPasswordInput
          placeHolder="Confirmar Contraseña"
          setNewPassword={
            registerFormActions.confirmPasswordProps.setConfirmPass
          }
          {...registerFormActions.confirmPasswordProps}
        />
      </Grid>
      <Grid textAlign={"center"} item>
        <MainButton
          btnText="Registrarse"
          onClick={registerFormActions.registerNewUser}
        />
        <LoginText {...registerFormActions} />
      </Grid>
    </Grid>
  );
};
