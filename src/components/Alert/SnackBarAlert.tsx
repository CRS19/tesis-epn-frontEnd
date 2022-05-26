import React, { useEffect, useState } from "react";
import { Alert, Snackbar } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../Hooks/useAppHooks";
import { get } from "lodash";
import { ISnackBarMessage } from "../../Shared/Interfaces/SnackBar.interfaces";
import { setSnackBarMessage } from "../../store/reducer/reducer";
import { INITIAL_SNACK_BAR } from "../../Shared/Contants/InitialSnackBarConfig";

export const SnackBarAlert = () => {
  const dispatch = useAppDispatch();
  const snackBarConfig: ISnackBarMessage = useAppSelector(
    (state) => state.generalReducer.snackBarConfig!
  );
  const [openCloseAlert, setOpenCloseAlert] = useState<boolean>(false);

  useEffect(() => {
    if (snackBarConfig.messageText !== INITIAL_SNACK_BAR.messageText) {
      setOpenCloseAlert(true);
    } else {
      setOpenCloseAlert(false);
    }
  }, [snackBarConfig]);

  useEffect(() => {
    if (!openCloseAlert) dispatch(setSnackBarMessage(INITIAL_SNACK_BAR));
  }, [openCloseAlert]);

  return (
    <>
      {get(snackBarConfig, "messageText", "") !==
      INITIAL_SNACK_BAR.messageText ? (
        <Snackbar
          open={openCloseAlert}
          autoHideDuration={6000}
          onClose={() => {
            setOpenCloseAlert(false);
          }}
        >
          <Alert
            onClose={() => {
              setOpenCloseAlert(false);
            }}
            severity={get(snackBarConfig, "severity", "warning")}
            sx={{ width: "100%" }}
          >
            {get(snackBarConfig, "messageText", "Error Inesperado")}
          </Alert>
        </Snackbar>
      ) : (
        <></>
      )}
    </>
  );
};
