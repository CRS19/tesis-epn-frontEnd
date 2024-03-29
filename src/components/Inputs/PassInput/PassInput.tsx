import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { IPassInputProps } from "./PassInput.interfaces";
import { passInputStyles } from "./PassInput.styles";

export const PassInput = ({ setPassword, login }: IPassInputProps) => {
  const [showPass, setShowPass] = useState<boolean>(false);

  return (
    <Box textAlign={"center"} sx={passInputStyles.container}>
      <TextField
        sx={passInputStyles.TextFieldMainStyle}
        id="Password-input"
        type={!showPass ? "password" : "text"}
        label="Ingrese contraseña"
        variant="outlined"
        onChange={(
          event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => {
          setPassword(event.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key == "Enter") {
            login();
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
