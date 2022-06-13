import React from "react";
import { useWindowDimensions } from "../../Hooks/useWindowDimensions";
import { MobileTopBar } from "./MobileTopBar/MobileTopBar";
import { WebTopBar } from "./WebTopBar/WebTopBar";
import { defaultTo } from "lodash";
import { Box } from "@mui/material";

export const TopBar = () => {
  const { width } = useWindowDimensions();

  // width = 900 === sm
  return (
    <>
      <Box
        sx={{
          position: { xs: "fixed", md: "inherit" },
          bgcolor: "white",
          width: "100%",
        }}
      >
        {defaultTo(width, 900) > 899 ? (
          <WebTopBar width={defaultTo(width, 1440)} />
        ) : (
          <MobileTopBar />
        )}
      </Box>
      <Box sx={{ height: { xs: "66px", md: "0px" } }} />
    </>
  );
};
