import { useEffect } from "react";
import { MovieCard, ProxMovieCard } from "../../components/MovieCard/MovieCard";
import { useMovie } from "../../hooks/useMovie";
import styles from "./HomePage.module.css";
import { Modal } from "../../components/Modal/Modal";

export function HomePage() {
  const { isLoading, movies, proxMovies, getMovies, getProxMovies } =
    useMovie();

  useEffect(() => {
    if (!isLoading) {
      getMovies();
      getProxMovies();
    }
  }, [getMovies, getProxMovies]);

  return (
    <>
      <div className={styles.carousel}>
        <h1 className={styles.title}>CARRUSEL DE IMAGENES</h1>
      </div>
      <div className={styles.containerEstrenos}>
        <h1 className={styles.title}>Lista de Peliculas</h1>
        <div className={styles.movies}>
          {isLoading ? (
            <p className={styles.loading}>Loading...</p>
          ) : (
            movies.map((movie) => <MovieCard movie={movie} key={movie.title} />)
          )}
        </div>
      </div>
      <div className={styles.containerProximos}>
        <h1 className={styles.title}>Proximos Estrenos</h1>
        <div className={styles.movies}>
          {isLoading ? (
            <p className={styles.loading}>Loading...</p>
          ) : (
            proxMovies.map((movie) => (
              <ProxMovieCard movie={movie} key={movie.title} />
            ))
          )}
        </div>
      </div>
      <Modal/>
    </>
  );
}
