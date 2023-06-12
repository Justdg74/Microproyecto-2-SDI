import { useEffect } from "react";
import { MovieCard, ProxMovieCard } from "../../components/MovieCard/MovieCard";
import { useMovie } from "../../hooks/useMovie";
import {Carousel} from "../../components/Carousel/Carousel"
import styles from "./HomePage.module.css";
import {Imagen} from "../../exports/images"

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
      <div className={styles.carouselContent}>
        {/*<Carousel images = {image} key={JSON.stringify(index)}/>*/}
  </div>
      <div className={styles.containerEstrenos}>
        <h1 className={styles.title}>LISTA DE PELICULAS</h1>
        <div className={styles.movies}>
          {isLoading ? (
            <p className={styles.loading}>Loading...</p>
          ) : (
            movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)
          )}
        </div>
      </div>
      <div className={styles.containerProximos}>
        <h1 className={styles.title}>PROXIMAMENTE</h1>
        <div className={styles.movies}>
          {isLoading ? (
            <p className={styles.loading}>Loading...</p>
          ) : (
            proxMovies.map((movie) => (
              <ProxMovieCard movie={movie} key={movie.id} />
            ))
          )}
        </div>
      </div>
    </>
  );
}
