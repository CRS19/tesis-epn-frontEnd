import { IStyles } from "../../Shared/Interfaces/Styles.interfaces";

export const loginWallpaperStyles: IStyles = {
  container: {},
  title: {
    marginLeft: 2,
    color: "#142946",
    lineHeight: "84px",
    fontSize: { xs: "32px", sm: "72px" },
    paddingTop: { md: "80px" },
    textAlign: { xs: "center", sm: "start" },
  },
  description: {
    marginLeft: 2,
    marginRight: { xs: 2, sm: 0 },
    color: "#2F2E41",
    fontSize: { xs: "21px", sm: "24px" },
    maxWidth: { xs: "100%", sm: "70%" },
    textAlign: { xs: "center", sm: "start" },
  },
  wallpaper: {
    marginTop: { xs: 6, sm: 16 },
    textAlign: { xs: "center", sm: "start" },
  },
};
