import { Box } from "@mui/material";
import React from "react";
import { RecomendationsSVG } from "../../../public/assets/svg/RecomendationsSVG";
import { Footer } from "../../components/Footer/Footer";
import { TopBar } from "../../components/TopHeaderBar/TopBar";
import { useAuth } from "../../Hooks/useAuth";

export const Recomendations = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      {isLoggedIn && (
        <>
          <TopBar />
          <Box sx={{ outline: "auto" }}>
            <Box display={"flex"} justifyContent="center" alignItems={"center"}>
              <RecomendationsSVG />
            </Box>
          </Box>
          <Footer />
        </>
      )}
    </>
  );
};
