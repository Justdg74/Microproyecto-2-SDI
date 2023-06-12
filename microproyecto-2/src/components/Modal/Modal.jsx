import React from "react";
import styles from "./Modal.module.css";

export const Modal = ({
  children,
  state,
  changeState,
  title,
  language,
  genre,
  cast,
  sinopsis,
  director,
  fechaEstreno,
  /*image,*/
}) => {
  return (
    <div>
      {state && (
        <div className={styles.modalContainer}>
          <div className={styles.modalContent}>
            <h2 className={styles.tiitle}>{title}</h2>
            {/*<div className={styles.imageContainer}>
              <img alt={title} className={styles.image} src={image} />
            </div>*/}
            <button
              onClick={() => changeState(false)}
              className={styles.modalButton}
            >
              <svg
                className={styles.svg}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </button>
            <div clasName={styles.infoContainer}>
              <h3 className={styles.subtitle}>Idioma Original: {language}</h3>
              <h3 className={styles.subtitle}>Genero: {genre}</h3>
              <h3 className={styles.subtitle}>Actores: {cast}</h3>
              <h3 className={styles.subtitle}>Sinopsis: {sinopsis}</h3>
              <h3 className={styles.subtitle}>Director: {director}</h3>
              <h3 className={styles.subtitle}>
                Fecha de Estreno: {fechaEstreno}
              </h3>
            </div>
            <button className={styles.reserveButton}>RESERVAR</button>
          </div>
          {children}
        </div>
      )}
    </div>
  );
};

export const ModalProx = ({
  children,
  state,
  changeState,
  title,
  language,
  genre,
  cast,
  sinopsis,
  director,
  fechaEstreno,
}) => {
  return (
    <div>
      {state && (
        <div className={styles.modalContainer}>
          <div className={styles.modalContent}>
            <h2 className={styles.tiitle}>{title}</h2>
            <button
              onClick={() => changeState(false)}
              className={styles.modalButton}
            >
              <svg
                className={styles.svg}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </button>
            <h3 className={styles.subtitle}>Idioma Original: {language}</h3>
            <h3 className={styles.subtitle}>Genero: {genre}</h3>
            <h3 className={styles.subtitle}>Actores: {cast}</h3>
            <h3 className={styles.subtitle}>Sinopsis: {sinopsis}</h3>
            <h3 className={styles.subtitle}>Director: {director}</h3>
            <h3 className={styles.subtitle}>
              Fecha de Estreno: {fechaEstreno}
            </h3>
            <h2 className={styles.advice}>PROXIMAMENTE DISPONIBLE</h2>
          </div>
          {children}
        </div>
      )}
    </div>
  );
};
