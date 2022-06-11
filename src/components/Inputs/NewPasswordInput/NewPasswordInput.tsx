import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { passInputStyles } from "../PassInput/PassInput.styles";
import { userInputStyle } from "../UserInput/UserInput.styles";
import { INewPasswordInputProps } from "./NewPasswordInput.interfaces";

export const NewPasswordInput = ({
  setNewPassword,
  registerNewUser,
  error,
  errorText,
  value,
  placeHolder = "Contraseña",
}: INewPasswordInputProps) => {
  const [showPass, setShowPass] = useState<boolean>(false);

  return (
    <Box
      textAlign={"center"}
      sx={{ ...userInputStyle.container, marginBottom: error ? 2 : 0 }}
    >
      <TextField
        error={error}
        sx={passInputStyles.TextFieldMainStyle}
        id="User-input"
        label={placeHolder}
        type={!showPass ? "password" : "text"}
        value={value}
        variant="outlined"
        helperText={errorText}
        onChange={(
          event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => {
          setNewPassword(event.target.value);
        }}
        onKeyDown={(event) => {
          console.log(event);
          if (event.key == "Enter") {
            registerNewUser();
          }
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment
              position="end"
              sx={{ marginRight: 1, marginTop: 0.5 }}
            >
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPass(!showPass)}
                edge="end"
              >
                {showPass ? (
                  <Box>
                    <img
                      src={"../../../../assets/show-pass.png"}
                      width={"20px"}
                      height={"20px"}
                    />
                  </Box>
                ) : (
                  <Box>
                    <img
                      src={"../../../../assets/hide-pass.png"}
                      width={"20px"}
                      height={"20px"}
                    />
                  </Box>
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};
