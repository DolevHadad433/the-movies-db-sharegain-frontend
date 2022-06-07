import React, { useEffect, useState } from "react";
import { openDetailsStyle, posterStyle } from "../../styles/styles";
import MovieType from "../../types/movies";
import CreditMovieType from "../../types/credits";
import { getCredit } from "../../api/getCredits";
import moment from "moment";
// prettier-ignore
import {Box,Rating,Typography,Modal,IconButton,Divider,Backdrop,Fade,} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Container } from "@mui/system";

interface MovieDetailsModalProps {
  handleClose: () => void;
  movie: MovieType;
  POSTER_URL: string;
}

function MovieDetailsModal({
  handleClose,
  movie,
  POSTER_URL,
}: MovieDetailsModalProps) {
  const [credits, setCredits] = useState<CreditMovieType | null>(null);

  useEffect(() => {
    getCredit(movie.id).then((data) => setCredits(data));
  }, []);

  console.log(credits);
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition
        open={true}
        onClose={handleClose}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: {
            appear: 1000,
            enter: 1000,
            exit: 1000,
          },
        }}
      >
        <Fade in={true}>
          <Container maxWidth="lg">
            <Box sx={openDetailsStyle}>
              <Box
                className="box"
                sx={{
                  width: "100%",
                  height: "100%",
                  fontFamily: "'Raleway', sans-serif, Roboto",
                }}
                display="grid"
                gap={3}
              >
                <Box className="poster" sx={{ gridArea: "poster" }}>
                  <img
                    style={posterStyle}
                    src={POSTER_URL}
                    alt="Movie poster"
                    loading="lazy"
                  />
                </Box>

                <Box className="exit" sx={{ gridArea: "exit" }}>
                  <IconButton
                    onClick={handleClose}
                    sx={{ color: "aquamarine" }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>

                <Box className="title" sx={{ gridArea: "title" }}>
                  <Typography
                    variant="h4"
                    component="div"
                    sx={{
                      fontFamily: "inherit",
                      fontSize: "100%",
                    }}
                  >
                    {movie.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      fontFamily: "inherit",
                      fontSize: "70%",
                    }}
                  >
                    ({moment(movie.release_date).format("MMMM D, YYYY")})
                  </Typography>
                </Box>

                <Box className="rating" sx={{ gridArea: "rating" }}>
                  <Rating
                    className="rating-child"
                    defaultValue={1}
                    value={movie.vote_average / 2}
                    readOnly
                    precision={0.5}
                    sx={{
                      boxShadow: "0px 0px 10px 1px #ccc",
                      bgcolor: "#ccc",
                      borderRadius: "5%",
                    }}
                  />
                </Box>
                <Box className="summary" sx={{ gridArea: "summary" }}>
                  <Typography
                    variant="h4"
                    component="h4"
                    sx={{
                      fontFamily: "inherit",
                      fontSize: "100%",
                    }}
                  >
                    {movie.overview}
                  </Typography>
                </Box>
                <Box className="actors" sx={{ gridArea: "actors" }}>
                  <Typography
                    component="div"
                    display="block"
                    sx={{ fontFamily: "inherit", fontSize: "inherit" }}
                  >
                    <strong
                      style={{
                        textDecoration: "underline",
                      }}
                    >
                      Actors
                    </strong>
                    {": "}
                    {credits?.cast.slice(undefined, 15).map((actor, i) => {
                      return (
                        <Typography
                          component="div"
                          key={i}
                          sx={{
                            fontStyle: "italic",
                            fontFamily: "inherit",
                            fontSize: "inherit",
                          }}
                          display="inline"
                        >
                          <strong>
                            {actor.original_name
                              ? actor.original_name
                              : "Unknown"}
                          </strong>{" "}
                          play as:{" "}
                          <strong>
                            {actor.character ? actor.character : "Unknown"}
                          </strong>
                          {". "}
                        </Typography>
                      );
                    })}
                  </Typography>
                </Box>
                <Box className="directors" sx={{ gridArea: "directors" }}>
                  <Typography
                    component="div"
                    display="block"
                    sx={{
                      fontFamily: "inherit",
                      fontSize: "inherit",
                    }}
                  >
                    <strong style={{ textDecoration: "underline" }}>
                      Directors
                    </strong>
                    {": "}
                    {credits?.crew.slice(undefined, 20).map((director, i) => {
                      return (
                        <Typography
                          component="div"
                          key={i}
                          sx={{
                            fontFamily: "inherit",
                            fontStyle: "italic",
                            fontSize: "inherit",
                          }}
                          display="inline"
                        >
                          {director.name
                            ? director.name
                            : director.original_name}

                          {". "}
                        </Typography>
                      );
                    })}
                  </Typography>
                  <Divider></Divider>
                </Box>
              </Box>
            </Box>
          </Container>
        </Fade>
      </Modal>
    </div>
  );
}

export default MovieDetailsModal;
