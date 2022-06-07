import THE_MOVIE_DB_API_KEY from "./config";

interface IGetMovies {
  page: number;
  searchValue?: string;
}

export async function getMovies({ page, searchValue }: IGetMovies) {
  try {
    const baseUrl = "https://api.themoviedb.org/3/search/movie";
    const query = searchValue ? `&query=${searchValue}` : null;
    const reqUrl = `${baseUrl}?api_key=${THE_MOVIE_DB_API_KEY}${query}&page=${page}`;
    const res = await fetch(reqUrl);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}
