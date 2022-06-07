import React, { useState } from "react";
import MovieType from "../types/movies";
import MovieList from "./MovieList/MovieList";
import Search from "./Search/Search";
import { Box, Container } from "@mui/system";
import { appStyle, appGridContainerStyle } from "../styles/styles";
import { Typography } from "@mui/material";

function App() {
  const [movieList, setMovieList] = useState<MovieType[] | []>([]);
  const [page, setPage] = useState<number>(1);

  return (
    <div className="App" style={appStyle}>
      <Container maxWidth="xl">
        <Box sx={appGridContainerStyle}>
          <Box
            className="box"
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridTemplateRows="repeat(12, 1fr)"
            gap={1}
          >
            <Box className="search" gridColumn="span 12" gridRow="span 12" sx={{pt:5}}>
              <Search
                setMovieList={setMovieList}
                page={page}
                setPage={setPage}
              />
            </Box>
            <Box className="movie-list" gridColumn="span 12" gridRow="span 12">
              {movieList.length === 0 ? (
                <Typography
                  variant="h2"
                  sx={{ fontFamily: "inherit", textAlign: "center" }}
                >
                  Welcome to the movies DataBase!
                  <br />
                  Search for results!
                </Typography>
              ) : (
                <MovieList movieList={movieList} />
              )}
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default App;
