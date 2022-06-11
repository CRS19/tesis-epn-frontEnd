import React from "react";
import { MainButton } from "../../components/Buttons/MainButton/MainButton";
import { useAuth } from "../../Hooks/useAuth";
import { Backdrop, CircularProgress } from "@mui/material";
import { loginStyles } from "../Login/Login.styles";
import { TopBar } from "../../components/TopHeaderBar/TopBar";
import { useHome } from "./state/useHome";

export const HomeDashboard = () => {
  const { logOut, isLoggedIn } = useHome();

  return (
    <>
      {isLoggedIn && (
        <>
          <TopBar />
          <MainButton btnText="Log out" onClick={logOut} />
          <Backdrop sx={loginStyles.circleLoader} open={false}>
            <CircularProgress color="inherit" />
          </Backdrop>
        </>
      )}
    </>
  );
};
