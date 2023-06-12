import { useCallback, useState } from "react";
import {
  fetchMovies,
  fetchDateMovies,
  fetchInfoMovies,
  fetchProxMovies,
  fetchMovieById,
} from "../utils/tmdb-api";

export function useMovie() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [proxMovies, setProxMovies] = useState([]);
  const [infoMovie, setInfoMovie] = useState([]);
  const [crewMovie, setCrewMovie] = useState([]);
  const [movie, setMovie] = useState(null);
  const [dateMovies, setDateMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const getMovies = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await fetchMovies();

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

      setProxMovies(data.results);
      setIsLoading(false);
      return proxMovies;
    } catch (error) {
      console.error("FAILED GET MOVIES", error);
    }
  }, []);

  const getMovieInfo = useCallback(async (id) => {
    try {
      setIsLoading(true);
      const { data } = await fetchInfoMovies(id);

      setInfoMovie(data.cast);
      setIsLoading(false);

      return infoMovie;
    } catch (error) {
      console.error("FAILED GET MOVIES", error);
    }
  }, []);

  const getCrewMovie = useCallback(async (id) => {
    try {
      setIsLoading(true);
      const { data } = await fetchInfoMovies(id);

      setCrewMovie(data.crew);
      setIsLoading(false);

      return crewMovie;
    } catch (error) {
      console.error("FAILED GET MOVIES", error);
    }
  }, []);

  {/*const getDateMovies = useCallback(async (id) => {
    try {
      setIsLoading(true);
      const { data } = await fetchDateMovies(id);

      setDateMovies(data.results);
      setIsLoading(false);
      return dateMovies;
    } catch (error) {
      console.error("FAILED GET MOVIES", error);
    }
  }, []);*/}

  return {
    isLoading,
    movies,
    movie,
    proxMovies,
    infoMovie,
    crewMovie,
    
    getMovies,
    getMovie,
    getProxMovies,
    getMovieInfo,
    getCrewMovie,
    
  };
}
