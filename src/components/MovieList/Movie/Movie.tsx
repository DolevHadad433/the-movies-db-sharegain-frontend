import React, { useState } from "react";
import MovieDetailsModal from "../../MovieDetails/openDetails";
import { logoStyle, movieStyle } from "../../../styles/styles";
import MovieType from "../../../types/movies";
// prettier-ignore
import {Card, Typography, Button, Backdrop, CircularProgress} from "@mui/material";
import { Box } from "@mui/system";
import moment from "moment";
// prettier-ignore
import {openMoreDetailsHandler, closeMoreDetailsHandler, } from "../../../utils/openMovieDetail";
import { loaderCloseHandler, loaderOpenHandler } from "../../../utils/loader";

interface MovieProps {
  movie: MovieType;
}

function Movie({ movie }: MovieProps) {
  const [openMoreDetails, setOpenMoreDetails] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const POSTER_URL = `https://image.tmdb.org/t/p/w780/${movie.poster_path}`;

  return (
    <Card sx={movieStyle}>
      <Box className="box" alignItems="center" sx={{ display: "grid", gap: 1 }}>
        <Box className="logo" sx={{ m: 1, gridArea: "logo" }}>
          <img
            style={logoStyle}
            src={POSTER_URL}
            alt="Movie poster"
            loading="lazy"
          />
        </Box>
        <Box className="title" sx={{ gridArea: "title" }}>
          <Typography
            variant="h4"
            component="h4"
            sx={{
              fontFamily: "'Raleway', sans-serif, Roboto",
              fontSize: "100%",
            }}
          >
            {movie.title}
          </Typography>
          <Typography
            variant="h6"
            component="h6"
            sx={{
              fontFamily: "'Raleway', sans-serif, Roboto",
              fontSize: "60%",
            }}
          >
            ({moment(movie.release_date).format("YYYY")})
          </Typography>
        </Box>
        <Box className="actions" sx={{ gridArea: "actions" }}>
          <Button
            sx={{
              color: "aquamarine",
              borderColor: "aquamarine",
              fontFamily: "'Raleway', sans-serif, Roboto",
              fontSize: "18px",
              fontWeight: "bold",
            }}
            variant="outlined"
            size="large"
            onClick={() =>
              openMoreDetailsHandler({
                loaderOpenHandler,
                showLoader,
                setShowLoader,
                loaderCloseHandler,
                setOpenMoreDetails,
              })
            }
          >
            More
          </Button>

          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={showLoader}
          >
            <CircularProgress color="inherit" />
          </Backdrop>

          {openMoreDetails === true ? (
            <MovieDetailsModal
              handleClose={() => closeMoreDetailsHandler(setOpenMoreDetails)}
              movie={movie}
              POSTER_URL={POSTER_URL}
            />
          ) : null}
        </Box>
      </Box>
    </Card>
  );
}
export default Movie;
