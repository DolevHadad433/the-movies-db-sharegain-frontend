import React from "react";

export interface SetLoader {
  setShowLoader: React.Dispatch<React.SetStateAction<boolean>>;
  showLoader?: boolean;
}

export function loaderCloseHandler({setShowLoader}: SetLoader) {
  setShowLoader(false);
}
export function loaderOpenHandler({ showLoader, setShowLoader }: SetLoader) {
  setShowLoader(!showLoader);
}
