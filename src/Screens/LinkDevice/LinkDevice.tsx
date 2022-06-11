import React from "react";
import { TopBar } from "../../components/TopHeaderBar/TopBar";
import { useLinkDevice } from "./state/useLinkDevice";

export const LinkDevice = () => {
  const { isLoggedIn } = useLinkDevice();

  return (
    <>
      {isLoggedIn && (
        <>
          <TopBar />
          <div>LinkDevice</div>
        </>
      )}
    </>
  );
};
