import { Box, Typography } from "@mui/material";
import React from "react";
import { ITimeLabel } from "./TimeLabel.interfaces";
import { TimeLabelStyles } from "./TimeLabel.styles";

export const TimeLabel = ({ time }: ITimeLabel) => {
  return (
    <Box sx={TimeLabelStyles.container}>
      <Box sx={TimeLabelStyles.timeLabel} />
      <Typography sx={{ color: "#F15950" }}>{time}</Typography>
    </Box>
  );
};
