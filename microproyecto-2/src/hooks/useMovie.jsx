import { useCallback, useState } from "react";
import { fetchMovieById, fetchMovies, fetchProxMovies, fetchInfoMovies } from "../utils/tmdb-api";

export function useMovie() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [proxMovies, setProxMovies] = useState([]);
  const [infoMovie, setInfoMovie] = useState(false);
  const [movie, setMovie] = useState(null);

  const getMovies = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await fetchMovies();
      console.log(data);
      setMovies(data.results);
      setIsLoading(false);
      return movies;

    } catch (error) {
      console.error("FAILED GET MOVIES", error);
    }
  }, []);

  const getMovie = useCallback(async (movieId) => {
    try {
      setIsLoading(true);
      const { data } = await fetchMovieById(movieId);
      setMovie(data);
      setIsLoading(false);

      return movie;
    } catch (error) {
      console.error("FAILED GET MOVIE", error);
    }
  }, []);

  const getProxMovies = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await fetchProxMovies();
      console.log(data);
      setProxMovies(data.results);
      setIsLoading(false);
      return proxMovies;

    } catch (error) {
      console.error("FAILED GET MOVIES", error);
    }
  }, []);

  const getMovieInfo = useCallback(async (movieId) => {
    try {
      setIsLoading(true);
      const { data } = await fetchInfoMovies(movieId);
      setInfoMovie(data.cast);
      setIsLoading(false);
      console.log("hola")
      console.log(infoMovie);
      return infoMovie;
     

    } catch (error) {
      console.error("FAILED GET MOVIES", error);
    }
  }, []);




  return {
    isLoading,
    movies,
    movie,
    proxMovies,
    infoMovie,
    getMovies,
    getMovie,
    getProxMovies,
    getMovieInfo,
  };
}
