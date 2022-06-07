import React from "react";
import { SetLoader } from "./loader";

export interface MovieDetailModelType {
  loaderCloseHandler({ setShowLoader }: SetLoader): void;
  loaderOpenHandler({ showLoader, setShowLoader }: SetLoader): void;
  showLoader?: boolean;
  setShowLoader: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenMoreDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

export function openMoreDetailsHandler({
  loaderOpenHandler,
  showLoader,
  setShowLoader,
  loaderCloseHandler,
  setOpenMoreDetails,
}: MovieDetailModelType) {
  loaderOpenHandler({ showLoader, setShowLoader });
  setTimeout(() => {
    loaderCloseHandler({ setShowLoader });
    setOpenMoreDetails(true);
  }, 500);
}

export function closeMoreDetailsHandler(
  setOpenMoreDetails: React.Dispatch<React.SetStateAction<boolean>>
) {
  setOpenMoreDetails(false);
}
