import React from "react";
import { useState, useEffect } from "react";
import styles from "./MovieCard.module.css";
import { Link } from "react-router-dom";
import { MOVIE_DETAIL_URL } from "../../constants/urls";
import { Modal } from "../../components/Modal/Modal";
import { useMovie } from "../../hooks/useMovie";

export function MovieCard({ movie }) {
  const [modalState1, changeModalState1] = useState(false);
  const { isLoading, infoMovie, crewMovie, dateMovies, getMovieInfo, getCrewMovie, getDateMovies } =
  useMovie();

  useEffect(() => {
    if (!isLoading) {
      getMovieInfo(JSON.stringify(movie.id));
      getCrewMovie(JSON.stringify(movie.id));
      getDateMovies(JSON.stringify(movie.id));
      
    }
  }, [getMovieInfo, getCrewMovie, getDateMovies]);

  return (
    <div className={styles.containerEstrenos}>
      <div>
        <div className= {styles.imageContainer}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className={styles.image}
        />
        </div>
      </div>
      <div className={styles.rightSideContainer}>
        <div className={styles.name}>
          <h2 onClick={() => changeModalState1(!modalState1)}>{movie.title}</h2>
        <div className = {styles.subtitle}>
            <h3>{`Idioma:  ${movie.original_language}`}</h3>
            <h3>{`Género:  ${movie.genre_ids[0]}`}</h3>
        </div>
        </div>
      </div>
      {(infoMovie.map((info) => <Modal
        state = {modalState1}
        changeState = {changeModalState1}
        title = {movie.title}
        language = {movie.original_language}
        genre = {movie.genre_ids.toString()}
        cast = {`${infoMovie[0].name}, ${infoMovie[1].name}, ${infoMovie[2].name}, ${infoMovie[3].name}, ${infoMovie[4].name}, ${infoMovie[5].name},...` }
        sinopsis = {movie.overview}
        
        director = {JSON.stringify(crewMovie.filter(({job})=> job ==='Director')[0])}
        fechaEstreno = {""}
        key = {info.id}
      />))}
    </div>
    
    
  );
}


export function ProxMovieCard({ movie }) {
  const [modalState1, changeModalState1] = useState(false);
  const { isLoading, infoMovie, crewMovie, dateMovies, getMovieInfo, getCrewMovie, getDateMovies } =
  useMovie();

  useEffect(() => {
    if (!isLoading) {
      getMovieInfo(JSON.stringify(movie.id));
      getCrewMovie(JSON.stringify(movie.id));
      getDateMovies(JSON.stringify(movie.id));
      
    }
  }, [getMovieInfo, getCrewMovie, getDateMovies]);

  return (
    <div className={styles.containerProximos}>
      <div>
        <div className= {styles.imageContainer}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className={styles.image}
        />
        </div>
      </div>
      <div className={styles.rightSideContainer}>
        <div className={styles.name}>
          <h2 onClick={() => changeModalState1(!modalState1)}>{movie.title}</h2>
        <div className = {styles.subtitle}>
            <h3>{`Idioma:  ${movie.original_language}`}</h3>
            <h3>{`Género:  ${movie.genre_ids[0]}`}</h3>
        </div>
        </div>
      </div>
      {(infoMovie.map((info) => <Modal
        state = {modalState1}
        changeState = {changeModalState1}
        title = {movie.title}
        language = {movie.original_language}
        genre = {movie.genre_ids.toString()}
        cast = {`${infoMovie[0].name}, ${infoMovie[1].name}, ${infoMovie[2].name}, ${infoMovie[3].name}, ${infoMovie[4].name}, ${infoMovie[5].name},...` }
        sinopsis = {movie.overview}
        
        director = {JSON.stringify(crewMovie.filter(({job})=> job ==='Director')[0])}
        fechaEstreno = {""}
        key = {info.id}
      />))}
    </div>
    
    
  );
}






