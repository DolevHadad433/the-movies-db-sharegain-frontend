import CreditMovieType from "../types/credits";
import THE_MOVIE_DB_API_KEY from "./config";

export async function getCredit(movie_id: number) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${THE_MOVIE_DB_API_KEY}`
    );
    const data: CreditMovieType = await response.json();
    return data;
  } catch (err) {
    throw new Error(`The error is: ${err}`);
  }
}
