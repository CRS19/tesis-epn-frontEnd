import { Grid, Typography } from "@mui/material";
import React from "react";
import { MainButton } from "../Buttons/MainButton/MainButton";
import { IdDeviceInput } from "../Inputs/IdDeviceInput/IdDeviceInput";
import { ILinkDeviceFromProps } from "./LinkDeviceForm.interfaces";
import { linkDeviceFormStyles } from "./LinkDeviceForm.styles";

export const LinkDeviceForm = ({
  idDevice,
  errorForm,
  onSubmit,
  hasIdDevice,
  handleInputIdDevice,
}: ILinkDeviceFromProps) => {
  return (
    <Grid container flexDirection={"row"} sx={linkDeviceFormStyles.container}>
      <Grid item xs={12}>
        <Typography sx={linkDeviceFormStyles.title}>
          {hasIdDevice ? "Desvincular" : "Vincular"} Dispositivo
        </Typography>
      </Grid>
      {!hasIdDevice && (
        <Grid item xs={12}>
          <Typography sx={linkDeviceFormStyles.description}>
            ¡Ingrese el código de su dispositivo para
          </Typography>
          <Typography sx={linkDeviceFormStyles.description}>
            empezar!
          </Typography>
        </Grid>
      )}
      <Grid item xs={6}>
        {!hasIdDevice && (
          <IdDeviceInput
            value={idDevice}
            error={errorForm.error}
            errorText={errorForm.textError}
            vinculateDevice={handleInputIdDevice}
          />
        )}
      </Grid>
      <Grid
        display={"flex"}
        item
        xs={6}
        justifyContent={"start"}
        alignItems={"center"}
      >
        {!hasIdDevice ? (
          <MainButton
            btnText="Vincular"
            onClick={onSubmit}
            hasMarginTop={false}
            borderRadius={true}
          />
        ) : (
          <MainButton
            btnText="Desvincular"
            onClick={onSubmit}
            hasMarginTop={false}
            borderRadius={true}
          />
        )}
      </Grid>
    </Grid>
  );
};
