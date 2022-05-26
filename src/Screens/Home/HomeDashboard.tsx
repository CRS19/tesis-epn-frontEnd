import React from "react";
import { useAppDispatch } from "../../Hooks/useAppHooks";
import { setLogOut } from "../../store/actionCreators/actionCreators";
import { MainButton } from "../../components/Buttons/MainButton/MainButton";
import { useAuth } from "../../Hooks/useAuth";

export const HomeDashboard = () => {
  const dispatch = useAppDispatch();
  useAuth();

  return (
    <>
      <div>Home</div>
      <MainButton
        btnText="Log out"
        onClick={() => {
          dispatch(setLogOut());
        }}
      />
    </>
  );
};
