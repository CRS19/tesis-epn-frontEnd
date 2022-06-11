import { IStyles } from "../../../Shared/Interfaces/Styles.interfaces";

export const cornerStyles: IStyles = {
  mainButtonStyle: {
    backgroundColor: "#0E2240",
    paddingTop: 1.5,
    paddingBottom: 1.5,
    paddingLeft: { xs: "22%", md: "16%" },
    paddingRight: { xs: "22%", md: "16%" },
  },
};

export const getContainerProps = (hasMarginTop: boolean) => ({
  container: {
    marginTop: hasMarginTop ? 8 : 0,
  },
});
