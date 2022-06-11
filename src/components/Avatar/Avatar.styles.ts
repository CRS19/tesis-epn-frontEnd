import { rainbowGenerate } from "../../../utility/Avatar-utils";
import { IStyles } from "../../Shared/Interfaces/Styles.interfaces";

export const avatarStyles = (initials: string): IStyles => ({
  buttomContainer: {
    display: "flex",
    bgcolor: rainbowGenerate(
      initials.codePointAt(0)!,
      initials.codePointAt(1)!
    ),
    height: { md: "60px", xl: "70px" },
    width: { md: "60px", xl: "70px" },
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
});

export const avatarConstStyles: IStyles = {
  typography: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "white",
  },
};
