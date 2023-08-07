import React from "react";
import { IAvatarLabelProps } from "./AvatarLabel.interfaces";
import { Box } from "@mui/material";
import { avatarStyles } from "../Avatar/Avatar.styles";
import { AvatarLabelStyles } from "./AvatarLabel.styles";

export const AvatarLabel = ({ name }: IAvatarLabelProps) => {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("");

  return (
    <Box sx={AvatarLabelStyles.container}>
      <Box
        sx={{
          ...avatarStyles(initials).buttomContainer,
          width: "40px",
          height: "40px",
          marginRight: "1rem",
        }}
      >
        {initials}
      </Box>
      <Box>{name}</Box>
    </Box>
  );
};
