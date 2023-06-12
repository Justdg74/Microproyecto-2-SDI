import image1 from "../assets/1.jpg"
import image2 from "../assets/2.jpg"
import image3 from "../assets/3.jpg"
import image4 from "../assets/4.jpg"
import image5 from "../assets/5.jpg"
import { useCallback, useState } from "react";

export function Imagen (){
    const imagenes = [image1,image2,image3,image4,image5]
    const indices = [1,2,3,4,5]
    const [image,  setImage] = useState([]);
    const [index,  setIndex] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getImage = useCallback(async () => {
        try {
          setIsLoading(true);
    
          setImage(imagenes);
          setIsLoading(false);
          return image;
        } catch (error) {
          console.error("FAILED GET IMAGE", error);
        }
      }, []);

      const getIndex = useCallback(async () => {
        try {
          setIsLoading(true);
    
          setIndex(indices);
          setIsLoading(false);
          return index;
        } catch (error) {
          console.error("FAILED GET INDEX", error);
        }
      }, []);

    return{
        isLoading,
        image,
        index,
        getImage,
        getIndex,

    }
}


