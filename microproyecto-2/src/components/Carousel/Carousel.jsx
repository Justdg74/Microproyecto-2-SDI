import React from "react";
import styles from "./Carousel.module.css";

export function Carousel({ images }) {
  const [imagenActual, setImagenActual] = React.useState(0);
  const cantidad = images?.length;

  if (!Array.isArray(images) || cantidad === 0) return;

  const nextImage = () => {
    setImagenActual(imagenActual === cantidad -1 ? 0 : imagenActual + 1)
    
  }

  const previousImage = () => {
    setImagenActual(imagenActual === 0? cantidad - 1 : imagenActual-1)

  }


  return (
    <div className={styles.container}>
      <button className = {styles.leftButton} onClick={previousImage}>←</button>
      {images.map((image, index) => {
        return (
          <div className= {imagenActual === index? `${styles.slide} ${styles.active}` : styles.slide}>
            {imagenActual === index && (
              <img src={image} alt="image" Key={index} />
            )}
            
          </div>
        );
      })}
      <button className= {styles.rightButton} onClick={nextImage}>→</button>
    </div>
  );
}
