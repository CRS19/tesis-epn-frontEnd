import React from "react";
import { ITableBodyProps } from "./TableBody.interfaces";
import { Box, TableCell, TableRow } from "@mui/material";
import { ContactsTableStyles } from "../ContactsTable.styles";
import { AvatarLabel } from "../../AvatarLabel/AvatarLabel";
import { TimeLabel } from "../../TimeLabel/TimeLabel";

export const TableBody = ({ key, contact }: ITableBodyProps) => {
  return (
    <TableRow sx={ContactsTableStyles.row} key={`${key}`}>
      <TableCell sx={ContactsTableStyles.body}>
        <AvatarLabel name={contact.name} />
      </TableCell>
      <TableCell sx={ContactsTableStyles.body}>
        <TimeLabel time={contact.duration} />
      </TableCell>
      <TableCell sx={ContactsTableStyles.body}>{contact.idDevice}</TableCell>
      <TableCell sx={ContactsTableStyles.body}>{contact.date}</TableCell>
    </TableRow>
  );
};
