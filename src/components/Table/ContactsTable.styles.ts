import { IStyles } from "./../../Shared/Interfaces/Styles.interfaces";

export const ContactsTableStyles: IStyles = {
  header: {
    bgcolor: "#484D58",
    color: "white",
    ".MuiTableCell-root": {
      borderBottom: "none",
      pl: "20px",
    },
  },
  cell: {
    fontSize: "18px",
  },
  body: {
    color: "#56CCF2",
    fontSize: "18px",
    borderBottom: "none",
  },
  row: {
    bgcolor: "#445670",
    "&.MuiTableRow-root:nth-child(even)": {
      bgcolor: "#0E2240",
    },
  },
};
