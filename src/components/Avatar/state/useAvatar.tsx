import { MouseEvent, useEffect, useState } from "react";
import { getNameInitials } from "../../../../utility/Avatar-utils";
import { getUser } from "../../../../utility/localStorage-utils";
import { useAppDispatch } from "../../../Hooks/useAppHooks";
import { IUser } from "../../../Shared/Interfaces/User.interfaces";
import { setLogOut } from "../../../store/actionCreators/actionCreators";
import { IUseAvatar } from "./useAvatar.interfaces";

export const useAvatar = (): IUseAvatar => {
  const dispatch = useAppDispatch();
  const [initials, setInitials] = useState<string>("");
  const [anchorElement, setAnchorElement] = useState<HTMLButtonElement | null>(
    null
  );
  const [isOpenAvatarOptions, setIsOpenAvatarOptions] =
    useState<boolean>(false);

  const openAvatarOptions = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorElement(event.currentTarget);
    setIsOpenAvatarOptions(true);
  };

  const closeAvatarOptions = () => {
    setAnchorElement(null);
    setIsOpenAvatarOptions(false);
  };
  const id = isOpenAvatarOptions ? "avatar-options-popover" : undefined;

  const logOut = () => {
    dispatch(setLogOut());
  };

  useEffect(() => {
    const currentUser: IUser = getUser() as IUser;

    setInitials(getNameInitials(currentUser.fullName));
  });

  return {
    id,
    initials,
    anchorElement,
    isOpenAvatarOptions,
    openAvatarOptions,
    closeAvatarOptions,
    logOut,
  };
};
