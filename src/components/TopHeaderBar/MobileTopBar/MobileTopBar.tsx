import {
  Box,
  ButtonBase,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Typography,
} from "@mui/material";
import React from "react";
import { HamburgerSVG } from "../../../../public/assets/svg/HamburgerSVG";
import { Avatar } from "../../Avatar/Avatar";
import { webTopBarStyles } from "../WebTopBar/WebTopBar.styles";
import { mobileTopBarStyles } from "./MobileTopBar.styles";
import { useMobileTopBar } from "./state/useMobileTopBar";

export const MobileTopBar = () => {
  const {
    openMenu,
    routesArray,
    currentPath,
    handleOpenCloseMemu,
    navigateTo,
  } = useMobileTopBar();

  return (
    <>
      <Grid container sx={{ padding: 1 }}>
        <Grid
          display={"flex"}
          item
          xs={2}
          sm={1}
          sx={{
            ...webTopBarStyles.container,
            height: "50px",
          }}
        >
          <ButtonBase
            sx={mobileTopBarStyles.hamburgerBtn}
            onClick={() => handleOpenCloseMemu(true)}
          >
            <HamburgerSVG />
          </ButtonBase>
        </Grid>
        <Grid display={"flex"} item xs={8} sm={10} flexDirection={"row"}>
          <Divider orientation="vertical" sx={webTopBarStyles.divider} />
          <Box
            sx={{
              display: "flex",
              width: "100%",

              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={webTopBarStyles.pageTitle}>
              {currentPath}
            </Typography>
          </Box>
        </Grid>
        <Grid
          display={"flex"}
          sx={webTopBarStyles.container}
          item
          xs={2}
          sm={1}
        >
          <Avatar />
        </Grid>
      </Grid>
      <Divider sx={{ bgcolor: "#425774" }} />
      <Drawer
        anchor="left"
        open={openMenu}
        onClose={(event: React.KeyboardEvent | React.MouseEvent) =>
          handleOpenCloseMemu(false)
        }
      >
        <Box role="presentation" sx={{ width: 250 }}>
          <List>
            {routesArray.map((text, index) => (
              <>
                <ListItem key={`${text}-${index}`} disablePadding>
                  <ListItemButton onClick={() => navigateTo(index)}>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};
