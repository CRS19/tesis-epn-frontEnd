import React from "react";
import { TopBar } from "../../components/TopHeaderBar/TopBar";
import { useAuth } from "../../Hooks/useAuth";

export const Recomendations = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      {isLoggedIn && (
        <>
          <TopBar />
          <div>Recomendations</div>
        </>
      )}
    </>
  );
};
