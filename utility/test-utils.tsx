import React from "react";

export const ShallowMock = (Component: JSX.Element, props: any) => {
  return React.cloneElement(Component, props);
};

export default ShallowMock;
