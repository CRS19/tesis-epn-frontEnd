import { Box, Typography } from "@mui/material";
import React from "react";
import { INavigationButtomProps } from "./NavigationButtom.interfaces";
import {
  getColorByPath,
  navigationButtomStyles,
} from "./NavigationButtom.styles";
import { useNavigationButtom } from "./state/useNavigationButtom";

export const NavigationButtom = ({
  title,
  navigateTo,
  path,
  windowWidth,
  width = "9.6%",
}: INavigationButtomProps) => {
  const { pathName, navigateToPath } = useNavigationButtom();

  return (
    <Box sx={{ ...navigationButtomStyles.container, width: width }}>
      <Typography
        sx={getColorByPath(pathName, path, windowWidth).textColor}
        onClick={() => navigateToPath(navigateTo)}
      >
        {title}
      </Typography>
    </Box>
  );
};
