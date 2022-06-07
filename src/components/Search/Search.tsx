import React, { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { searchBarStyle } from "../../styles/styles";
import { getMovies } from "../../api/searchMovies";
import IMovie from "../../types/movies";
// prettier-ignore
import {IconButton, Backdrop, CircularProgress, Snackbar,Skeleton, Popover, Typography} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Box } from "@mui/system";
// prettier-ignore
import {openCopyURLMessageHandler, closeCopyURLMessageHandler, createActions} from "../../utils/copyURLpopMessage";
import { loaderCloseHandler, loaderOpenHandler } from "../../utils/loader";
import { copyLinkToClipboard } from "../../utils/copyToClipboard";
// prettier-ignore
import {openPopoverHandler, closePopoverHandler} from "../../utils/copyToClipboardHoverPopover";

interface SearchProps {
  setMovieList: React.Dispatch<React.SetStateAction<[] | IMovie[]>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export type SearchValueType = string | number | readonly string[];

function Search({ setMovieList, page, setPage }: SearchProps) {
  let [searchParams, setSearchParams] = useSearchParams();
  // prettier-ignore
  const [searchValue, setSearchValue] = useState<SearchValueType>(String(searchParams.get("search") ?? ""));
  const [delayedSearch, setDelayedSearch] = useState(searchValue);
  const [showLoader, setShowLoader] = useState(false);
  const [showCopyURLMessage, setshowCopyURLMessage] = useState(false);
  const [popoverTarget, setPopoverTarget] = React.useState<HTMLElement | null>(
    null
  );

  const open = Boolean(popoverTarget);

  async function debounceSearchValue() {
    if (String(delayedSearch).length === 0) {
      setSearchParams(`search=${delayedSearch}`);
      setSearchValue(delayedSearch);
      return;
    }
    if (String(delayedSearch).length < 3) return;
    setSearchParams(`search=${delayedSearch}`);
    setSearchValue(delayedSearch);
  }

  useEffect(() => {
    const timer = setTimeout(debounceSearchValue, 1000);
    return () => clearTimeout(timer);
  }, [delayedSearch]);

  useEffect(() => {
    if (searchValue !== "") {
      loaderOpenHandler({ setShowLoader });
      getMoviesHandler();
    } else {
      setMovieList([]);
      setPage(1);
    }
    setTimeout(() => {
      loaderCloseHandler({ showLoader, setShowLoader });
    }, 1000);
  }, [searchValue]);

  async function getMoviesHandler() {
    const res = await getMovies({ page, searchValue: String(searchValue) });
    const movies = res.results.filter(
      (movie: IMovie) => movie.poster_path !== null
    );
    setMovieList(movies);
  }

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Backdrop sx={{ color: "#fff" }} open={showLoader}>
        <CircularProgress sx={{ color: "aquamarine" }} />
      </Backdrop>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridTemplateRows="repeat(6, 1fr)"
        gap={2}
        alignItems="center"
      >
        <Box
          className="poster"
          gridColumn="span 1"
          gridRow="span 6"
          justifySelf="end"
        >
          <IconButton
            sx={{ color: "white" }}
            aria-owns={open ? "mouse-over-popover" : undefined}
            onMouseEnter={(e) => openPopoverHandler(e, setPopoverTarget)}
            onMouseLeave={() => closePopoverHandler(setPopoverTarget)}
            onClick={(e) => {
              copyLinkToClipboard({
                openCopyURLMessageHandler,
                closeCopyURLMessageHandler,
                setshowCopyURLMessage,
              });
            }}
          >
            <ContentCopyIcon />
          </IconButton>
          <Popover
            sx={{
              pointerEvents: "none",
              color: "#15161d",
            }}
            open={open}
            anchorEl={popoverTarget}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            onClose={closePopoverHandler}
            disableRestoreFocus
          >
            <Typography
              sx={{
                bgcolor: "#15161d",
                color: "white",
                p: 1,
                border: "1px solid white",
                borderRadius: "10%",
              }}
            >
              Copy URL!
            </Typography>
          </Popover>
        </Box>
        <Box className="poster" gridColumn="span 10" gridRow="span 6">
          <input
            style={searchBarStyle}
            className="searchbar-input"
            type="text"
            placeholder="Type to search. . ."
            onChange={(e) => setDelayedSearch(e.target.value)}
            value={delayedSearch}
          ></input>
          <Snackbar
            open={showCopyURLMessage}
            autoHideDuration={3000}
            message="URL link has copied to clipboard!"
            action={createActions(setshowCopyURLMessage)}
          />
        </Box>
      </Box>
    </div>
  );
}
export default Search;
