import React from "react";
import {
  Box,
  Divider,
  Grid,
  Modal,
  Typography,
  ButtonBase,
} from "@mui/material";
import { ISickModalProps } from "./SickModal.interfaces";
import { sickModalStyles } from "./SickModal.styles";
import { CloseModalBtn } from "../../../../public/assets/svg/CloseModalBtn";
import { MainButton } from "../../Buttons/MainButton/MainButton";

export const SickModal = ({
  isOpen,
  onClose,
  onYesPress,
  title,
  subTitle,
}: ISickModalProps) => {
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
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider sx={{ bgcolor: "#425774" }} />
          </Grid>
          <Grid item xs={12}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {subTitle}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <MainButton
              onClick={onYesPress}
              btnText="SI"
              hasMarginTop={false}
              borderRadius={true}
              width={"85px"}
            />
          </Grid>
          <Grid item xs={6}>
            <MainButton
              onClick={onClose}
              btnText="NO"
              hasMarginTop={false}
              borderRadius={true}
              variant="secondary"
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
