import React from "react";
import styles from "./MovieCardInfo.module.css";
import { Link } from "react-router-dom";
import { MOVIE_DETAIL_URL } from "../../constants/urls";

export function MovieCardInfo({ movie }) {
  return (
    <div className={styles.containerEstrenos}>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className={styles.image}
        />
      </div>
      <div className={styles.rightSideContainer}>
        <div className={styles.name}>
          <h2>{movie.title}</h2>
        <div className = {styles.subtitle}>
            <h3>{`Idioma:  ${movie.original_language}`}</h3>
            <h3>{`Género:  ${movie.genre_ids[0]}`}</h3>
            <h3>{`Sinopsis:  ${movie.overview}`}</h3>
            <h3>{`Actores:  ${movie.original_name}`}</h3>
        </div>
        </div>
      </div>
    </div>
  );
}

export function ProxMovieCardInfo({ movie }) {
  return (
    <div className={styles.containerProximos}>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className={styles.image}
        />
      </div>
      <div className={styles.rightSideContainer}>
        <div className={styles.name}>
          <h2>{movie.title}</h2>
        <div className = {styles.subtitle}>
            <h3>{`Idioma:  ${movie.original_language}`}</h3>
            <h3>{`Género:  ${movie.genre_ids[0]}`}</h3>
        </div>
        </div>
      </div>
    </div>
  );
}


