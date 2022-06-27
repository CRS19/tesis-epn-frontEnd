import React from "react";
import {
  Box,
  Divider,
  Grid,
  Modal,
  Typography,
  ButtonBase,
} from "@mui/material";
import { CloseModalBtn } from "../../../../public/assets/svg/CloseModalBtn";
import { MainButton } from "../../Buttons/MainButton/MainButton";
import { IPosibleSickModalProps } from "./PosibleSickModal.interfaces";
import { sickModalStyles } from "../SickModal/SickModal.styles";

export const PosibleSickModal = ({
  isOpen,
  onClose,
}: IPosibleSickModalProps) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={sickModalStyles.modal}>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              color={"#0E2240"}
            >
              Un contacto tuyo está enfermo
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider sx={{ bgcolor: "#425774" }} />
          </Grid>
          <Grid item xs={12}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Por favor, considera realizarte una prueba de COVID-19 preventiva
              ó solicitar realizar tus actividades diarias en modalidad de
              teletrabajo por 15 días.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <MainButton
              onClick={onClose}
              btnText="OK"
              hasMarginTop={false}
              borderRadius={true}
              width={"85px"}
            />
          </Grid>
        </Grid>
        <Box sx={{ position: "absolute", right: 20, top: 20 }}>
          <ButtonBase onClick={onClose} sx={{ borderRadius: 100 }}>
            <CloseModalBtn />
          </ButtonBase>
        </Box>
      </Box>
    </Modal>
  );
};
