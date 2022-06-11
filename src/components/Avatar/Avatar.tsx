import { ButtonBase, Popover, Typography } from "@mui/material";
import React from "react";
import { MainButton } from "../Buttons/MainButton/MainButton";
import { avatarConstStyles, avatarStyles } from "./Avatar.styles";
import { useAvatar } from "./state/useAvatar";

export const Avatar = () => {
  const {
    id,
    initials,
    anchorElement,
    isOpenAvatarOptions,
    openAvatarOptions,
    closeAvatarOptions,
    logOut,
  } = useAvatar();

  return (
    <>
      <ButtonBase
        sx={avatarStyles(initials).buttomContainer}
        onClick={openAvatarOptions}
      >
        <Typography sx={avatarConstStyles.typography}>{initials}</Typography>
      </ButtonBase>
      <Popover
        id={id}
        open={isOpenAvatarOptions}
        anchorEl={anchorElement}
        onClose={closeAvatarOptions}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <MainButton
          btnText="Cerrar Sessión"
          onClick={logOut}
          hasMarginTop={false}
        />
      </Popover>
    </>
  );
};
