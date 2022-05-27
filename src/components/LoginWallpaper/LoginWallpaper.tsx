import { Box, Typography } from "@mui/material";
import React from "react";
import { WallpaperSVG } from "../../../public/assets/svg/WallpaperSVG";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import { loginWallpaperStyles } from "./LoginWallpaper.styles";
import { defaultTo } from "lodash";
import { WallpaperSVG2 } from "../../../public/assets/svg/WallpaperSVG2";

export const LoginWallpaper = () => {
  const { width } = useWindowDimensions();

  return (
    <Box sx={loginWallpaperStyles.container}>
      <Box>
        <Typography sx={loginWallpaperStyles.title}>
          Distanciamiento FIS
        </Typography>
      </Box>
      <Box>
        <Typography sx={loginWallpaperStyles.description}>
          Bienvenido, lleva control de tu distanciamiento social en la faculatad
          !TE QUEREMOS SANO!
        </Typography>
      </Box>
      <Box sx={loginWallpaperStyles.wallpaper}>
        <WallpaperSVG
          width={String(defaultTo(width, 100) * 0.48)}
          widthPerson={String(defaultTo(width, 100) * 0.11)}
        />
      </Box>
    </Box>
  );
};
