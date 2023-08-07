import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { TopBar } from "../../components/TopHeaderBar/TopBar";
import { useHistory } from "./state/useHistory";
import { Box } from "@mui/material";
import { BackgroundHistoryPage } from "../../components/Backgrounds/BackgroundHistoryPage";
import { SnackBarAlert } from "../../components/Alert/SnackBarAlert";
import { ContactsTable } from "../../components/Table/ContactsTable";
import { HistoryStyles } from "./History.styles";

export const History = () => {
  const { isLoggedIn, contacts } = useHistory();

  return (
    <>
      {isLoggedIn && (
        <>
          <TopBar />
          <BackgroundHistoryPage />
          <Box sx={HistoryStyles.contactTableBackground}>
            <Box sx={HistoryStyles.contactTableContainer}>
              <ContactsTable contacts={contacts} />
            </Box>
          </Box>
          <SnackBarAlert />
          <Footer hasExtraHeight={false} />
        </>
      )}
    </>
  );
};
