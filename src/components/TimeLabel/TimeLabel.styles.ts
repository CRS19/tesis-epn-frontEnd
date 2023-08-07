import { IStyles } from "../../Shared/Interfaces/Styles.interfaces";

export const TimeLabelStyles: IStyles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    bgcolor: "white",
    width: "fit-content",
    px: "0.5rem",
    py: "0.2rem",
    borderRadius: "0.3rem",
    border: "2px solid #EEB3B0",
  },
  timeLabel: {
    borderRadius: 100,
    width: "5px",
    height: "5px",
    bgcolor: "#F15950",
    mr: "0.6rem",
  },
};
