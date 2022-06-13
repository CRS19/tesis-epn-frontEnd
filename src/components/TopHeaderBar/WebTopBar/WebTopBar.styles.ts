import { IStyles } from "../../../Shared/Interfaces/Styles.interfaces";

export const webTopBarStyles: IStyles = {
  container: { justifyContent: "center", alignItems: "center" },
  divider: {
    bgcolor: "#002467",
    maxHeight: "100px",
    width: "8px",
    marginTop: { xs: 0.1, md: 1 },
  },
  pageTitle: {
    color: "#002467",
    fontSize: "22px",
    textTransform: "uppercase",
  },
};
