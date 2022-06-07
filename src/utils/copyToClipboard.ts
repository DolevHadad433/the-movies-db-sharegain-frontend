interface CopyLinkToClipboardType {
  openCopyURLMessageHandler: (
    setshowCopyURLMessage: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  closeCopyURLMessageHandler: (
    setshowCopyURLMessage: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  setshowCopyURLMessage: React.Dispatch<React.SetStateAction<boolean>>;
}

export function copyLinkToClipboard({
  openCopyURLMessageHandler,
  closeCopyURLMessageHandler,
  setshowCopyURLMessage,
}: CopyLinkToClipboardType) {
  openCopyURLMessageHandler(setshowCopyURLMessage);
  navigator.clipboard.writeText(`${window.location.href}`);
  setTimeout(() => {
    closeCopyURLMessageHandler(setshowCopyURLMessage);
  }, 2000);
}
