import { useEffect } from "react";
import {MovieCardInfo, ProxMovieCardInfo} from "../../components/MovieCardInfo/MovieCardInfo";
import { useMovie } from "../../hooks/useMovie";
import styles from "./MovieList.module.css";

export function MovieList() {
  const { isLoading, movies, proxMovies, getMovies, getProxMovies } = useMovie();

  useEffect(() => {
    if (!isLoading) {
        getMovies();
        getProxMovies();
    }
  }, [getMovies, getProxMovies]);

  return (
    <>
      <div className= {styles.containerEstrenos}>
        <h1 className={styles.title}>Lista de Peliculas</h1>
        <div className={styles.movies}>
          {isLoading ? (
            <p className={styles.loading}>Loading...</p>
          ) : (
            movies.map((infoMovie) => (
              <MovieCardInfo movie={infoMovie} key={infoMovie.title} />
            ))
          )}
        </div>
      </div>
      <div className={styles.containerProximos}>
        <h1 className={styles.title}>Proximos Estrenos</h1>
        <div className={styles.movies}>
          {isLoading ? (
            <p className={styles.loading}>Loading...</p>
          ) : (
            proxMovies.map((infoMovie) => (
              <ProxMovieCardInfo movie={infoMovie} key={infoMovie.title} />
            ))
          )}
        </div>
      </div>
    </>
  );
}
