import { IStyles } from "../../../Shared/Interfaces/Styles.interfaces";

export const passInputStyles: IStyles = {
  container: {
    marginTop: 2,
  },
  TextFieldMainStyle: {
    width: { xs: "90%", md: "58%" },
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    boxShadow: 3,
    maxHeight: "56px",
    "& .MuiInputBase-input": {
      backgroundColor: "#FFFFFF",
      borderRadius: 30,
    },
    "& .MuiOutlinedInput-input": {
      paddingLeft: 3,
    },
    "& .MuiInputLabel-root": {
      marginLeft: 1,
    },
    "& label.Mui-focused": {
      color: "black",
      marginLeft: "10px",
      top: -5,
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: 30,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "transparent",
      },
      "&:hover fieldset": {
        borderRadius: 30,
      },
      "&.Mui-focused fieldset": {
        borderColor: "transparent",
      },
    },
  },
};
