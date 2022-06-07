import React from "react";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const openCopyURLMessageHandler = (
  setshowCopyURLMessage: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setshowCopyURLMessage(true);
};

export const closeCopyURLMessageHandler = (
  setshowCopyURLMessage: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setshowCopyURLMessage(false);
};

export function createActions(
  setshowCopyURLMessage: React.Dispatch<React.SetStateAction<boolean>>
) {
  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={() => closeCopyURLMessageHandler(setshowCopyURLMessage)}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return action;
}
