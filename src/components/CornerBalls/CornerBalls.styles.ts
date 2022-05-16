import { IStyles } from "../../Shared/Interfaces/Styles.interfaces";

export const cornerStyles: IStyles = {
  container: {
    position: "absolute",
  },
  ballOne: {
    position: "relative",
    top: { xs: -80, md: -200 },
    right: { xs: 80, md: 30 },
    height: { xs: 150, md: 335 },
    width: { xs: 150, md: 335 },
    borderRadius: 100,
    opacity: "81%",
    backgroundColor: "#0E2240",
  },
  ballTwo: {
    position: "relative",
    top: { xs: -180, md: -420 },
    right: { xs: 110, md: 140 },
    height: { xs: 150, md: 313 },
    width: { xs: 150, md: 313 },
    borderRadius: 100,
    opacity: "81%",
    backgroundColor: "#0E2240",
  },
};
