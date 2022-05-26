import { IStyles } from "../../../Shared/Interfaces/Styles.interfaces";

export const registerStyle: IStyles = {
  container: {
    marginTop: 2,
  },
  text: {
    display: "inline-block",
    fontSize: "14px",
  },
  registerText: {
    color: "#50C2C9",
    display: "inline-block",
    cursor: "pointer",
    "&:hover": {
      color: "#E31D1A",
    },
  },
};
