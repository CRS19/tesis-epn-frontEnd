import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";
import { useD3 } from "../../Hooks/useD3";
import { INodesGraphProps } from "./NodesGraph.interfaces";
import { NodesGraphStyles } from "./NodesGraph.styles";

export const NodesGraph = ({ idDevice }: INodesGraphProps) => {
  const { chartIsRendered, isLoading, noEnough } = useD3({ idDevice });

  return (
    <Box sx={NodesGraphStyles.container}>
      {chartIsRendered && <div className="canva"></div>}

      {isLoading && (
        <Box sx={NodesGraphStyles.loading}>
          <CircularProgress color="inherit" />
        </Box>
      )}

      {noEnough && (
        <Box sx={NodesGraphStyles.text}>
          <Typography sx={{ left: -1 }}>
            No hay suficiente información
          </Typography>
        </Box>
      )}
    </Box>
  );
};
