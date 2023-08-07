import { Box, TableCell, TableRow } from "@mui/material";
import React from "react";
import { ContactsTableStyles } from "../ContactsTable.styles";

export const TableHeader = () => {
  return (
    <TableRow sx={ContactsTableStyles.header}>
      <TableCell sx={ContactsTableStyles.cell}>Contactos</TableCell>
      <TableCell sx={ContactsTableStyles.cell}>Duración</TableCell>
      <TableCell sx={ContactsTableStyles.cell}>Id del dispositivo</TableCell>
      <TableCell sx={ContactsTableStyles.cell}>Fecha de Contacto</TableCell>
    </TableRow>
  );
};
