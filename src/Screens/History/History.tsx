import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { TopBar } from "../../components/TopHeaderBar/TopBar";
import { useHistory } from "./state/useHistory";

export const History = () => {
  const { isLoggedIn } = useHistory();

  return (
    <>
      {isLoggedIn && (
        <>
          <TopBar />
          <div>History</div>
          <Footer />
        </>
      )}
    </>
  );
};
