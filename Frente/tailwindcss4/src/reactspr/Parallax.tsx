import React, { useState, useEffect,useRef } from 'react';
import styles from './ParallaxIntro.module.css';
import { motion } from "framer-motion";
import {PlanetA  , PlanetC, PlanetD, PlanetE, PlanetF, PlanetG} from '../Anim/Planet';






//esto es para la constante useIsVisible 
const useIsVisible = (options?: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return { ref, isVisible };
};



const Info = () => {
  const { ref, isVisible } = useIsVisible();
  
  return (
    <div
      ref={ref}
      style={{
        marginTop: "25vh",
        color: "white",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {isVisible ? (
        <motion.div
          initial={{ opacity: 0, y: 0}} // Inicialmente invisible
          animate={{ opacity: 1, y: ["7px", "-15px", "-1px"] }} // Cambia la opacidad cuando es visible
          transition={{ duration: 1, delay: 5 }} // Duración de la animación
        >
          <div className={styles.ttt}>
            <p> Sigue bajando para ver más </p>
            <div className="text-4xl">▼</div>

          </div>
        </motion.div>
      ) : null}
    </div>
  )
}






const TextOne = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1.5 }} 
      className={styles.container} // Asegurar que todo esté alineado correctamente
    >
      <div className={styles.center}>
        <h1 className={styles.snt}>Impacta, Influye e Inspira ...</h1>

        {/* Párrafo justo debajo del H1 con delay en la animación */}
        <motion.p 
          className={styles.rnt}
          initial={{ opacity: 0, y: -5 }} // Subir un poco el texto al inicio
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 1.5 }} // Retraso de 1.5s
        >
        <p>  Empieza a crear y sorprende  </p>  
        </motion.p>
      </div>
    </motion.div>
  );
};


// para el efecto de flotación

const Planetas =()  =>{
  return (
    <motion.div 
    initial={{ opacity: 0, y: -5 }} // Subir un poco el texto al inicio
    animate={{ opacity: 1, y: ["10px", "-10px", "0px"] }}
    transition={{ repeat: Infinity, repeatType: "reverse", duration: 3 }}
    >
        <PlanetA/>
        {/* <PlanetB/> */}
        <PlanetC/>
        <PlanetD/>
        <PlanetE/>
        <PlanetF/>
        <PlanetG/>
    </motion.div>
  )
}





// Fondo para agregar los motion
const Componente= () => {
  return (
    <div className={styles.background}>
   
    
     <TextOne/>
      <Planetas/>
      <Info/>


    </div>
  )
}


export default Componente;
