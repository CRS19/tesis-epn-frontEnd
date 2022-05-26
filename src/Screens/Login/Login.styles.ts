import { IStyles } from "../../Shared/Interfaces/Styles.interfaces";

export const loginStyles: IStyles = {
  cutomButtomStyle: {
    backgroundColor: "orange",
    ":hover": { backgroundColor: "green" },
  },
  LogInFormContainer: {
    height: {
      xs: 1024,
    },
    width: {
      xs: "100%",
      md: "50%",
      lg: "40%",
    },
    backgroundColor: "rgba(119, 164, 220, 0.13)",
  },
  IlustrationContainer: {
    height: {
      xs: 712,
    },
    width: {
      xs: "100%",
      md: "50%",
      lg: "60%",
    },
    backgroundColor: "blue",
  },
};

export const generalStyles: IStyles = {
  PageContainer: {
    padding: 0,
  },
  TextFieldMainStyle: {
    width: { xs: "90%", md: "58%" },
    borderRadius: 30,
    boxShadow: 3,
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
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
      borderRadius: 30,
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
