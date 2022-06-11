import { MouseEvent } from "react";

export interface IUseAvatar {
  id: string | undefined;
  initials: string;
  anchorElement: HTMLButtonElement | null;
  isOpenAvatarOptions: boolean;
  openAvatarOptions: (event: MouseEvent<HTMLButtonElement>) => void;
  closeAvatarOptions: () => void;
  logOut: () => void;
}
