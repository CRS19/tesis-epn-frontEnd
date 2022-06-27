import { Box, ButtonBase, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { SickWarmingIcon } from "../../../../public/assets/svg/SickWarmingIcon";
import { IAlertCardProps } from "./AlertCard.interfaces";

export const AlertCard = ({ onClick }: IAlertCardProps) => {
  return (
    <Paper
      elevation={10}
      sx={{
        marginTop: 4,
        marginBottom: 4,
        borderRadius: 2,
        background:
          "linear-gradient( to right,red 0%, red 1%, white 1%, white 98%)",
        bgcolor: "white",
      }}
    >
      <ButtonBase onClick={onClick} sx={{ width: "100%" }}>
        <Grid flexDirection={"row"} container>
          <Grid
            display={"flex"}
            alignItems="center"
            justifyContent={"center"}
            item
            xs={3}
          >
            <SickWarmingIcon />
          </Grid>
          <Grid item xs={9} textAlign="start">
            <Box marginLeft={1} padding={1} paddingRight={4}>
              <Typography sx={{ fontSize: "24px", color: "#0E2240" }}>
                Alerta
              </Typography>
              <Typography sx={{ color: "#0E2240" }}>
                Un compañero de trabajo ha resultado positivo en COVID-19
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </ButtonBase>
    </Paper>
  );
};
