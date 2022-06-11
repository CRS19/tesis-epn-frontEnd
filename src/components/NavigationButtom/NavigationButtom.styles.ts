import { getFontsSizesByWidth } from "../../../utility/Avatar-utils";
import { IStyles } from "../../Shared/Interfaces/Styles.interfaces";

export const navigationButtomStyles: IStyles = {
  container: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
};

export const getColorByPath = (
  currentPath: string,
  pathName: string,
  width: number
): IStyles => ({
  textColor: {
    color: currentPath === pathName ? "#77A4DC" : "#616462",
    fontSize: `${getFontsSizesByWidth(width)}px`,
    textTransform: "uppercase",
    cursor: "pointer",
    "&:hover": {
      color: "#FF0D01",
    },
  },
});
