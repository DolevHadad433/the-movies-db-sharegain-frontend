import React from "react";
import MovieType from "../../types/movies";
import Movie from "./Movie/Movie";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";

interface MovieListProps {
  movieList: MovieType[];
}

function MovieList({ movieList }: MovieListProps) {
  return (
    <div className="movies-container">
      <Container maxWidth="xl">
        <Grid container rowSpacing={2} flexDirection="column">
          {movieList
            .filter((m) => m.poster_path !== null)
            .map((m) => {
              return (
                <Grid item key={m.id} xs={12}>
                  <Movie movie={m} />
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </div>
  );
}
export default MovieList;
