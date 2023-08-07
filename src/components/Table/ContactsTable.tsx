import React from "react";
import { Box, Table } from "@mui/material";
import { TableHeader } from "./Header/TableHeader";
import { TableBody } from "./Body/TableBody";
import { IContactsTableProps } from "./ContactsTable.interfaces";

export const ContactsTable = ({ contacts }: IContactsTableProps) => {
  return (
    <Table
      sx={{
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
        maxWidth: "1200px",

        overflowX: "scroll",
      }}
    >
      <TableHeader />
      {contacts.map((contact, index) => (
        <TableBody key={index} contact={contact} />
      ))}
    </Table>
  );
};
