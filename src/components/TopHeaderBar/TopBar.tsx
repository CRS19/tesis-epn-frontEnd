import React from "react";
import { useWindowDimensions } from "../../Hooks/useWindowDimensions";
import { MobileTopBar } from "./MobileTopBar/MobileTopBar";
import { WebTopBar } from "./WebTopBar/WebTopBar";
import { defaultTo } from "lodash";

export const TopBar = () => {
  const { width } = useWindowDimensions();

  // width = 900 === sm
  return (
    <>
      {defaultTo(width, 900) > 899 ? (
        <WebTopBar width={defaultTo(width, 1440)} />
      ) : (
        <MobileTopBar />
      )}
    </>
  );
};
