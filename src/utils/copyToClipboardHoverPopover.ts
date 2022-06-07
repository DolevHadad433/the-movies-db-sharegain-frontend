import React from "react";

export function openPopoverHandler(
  event: React.MouseEvent<HTMLElement>,
  setPopoverTarget: React.Dispatch<React.SetStateAction<HTMLElement | null>>
) {
  setPopoverTarget(event.currentTarget);
}

export function closePopoverHandler(
  setPopoverTarget: React.Dispatch<React.SetStateAction<HTMLElement | null>>
) {
  setPopoverTarget(null);
}
