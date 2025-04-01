import React, { useState, useEffect } from 'react';
import styles from './ParallaxIntro.module.css';
import { motion } from "framer-motion";
import MyComponent from "../Anim/FirstSrping"; // Suponiendo que este es otro componente que quieres mostrar
import {PlanetA  , PlanetC, PlanetD, PlanetE, PlanetF, PlanetG} from '../Anim/Planet';

// para el efecto de flotación






const RevealEffectOnScroll = () => {
  const [scrollY, setScrollY] = useState(0); // Estado para almacenar el desplazamiento
  const [isVisible, setIsVisible] = useState(false); // Estado para controlar la visibilidad

  // Función para manejar el scroll
  const handleScroll = () => {
    setScrollY(window.scrollY); // Actualiza el desplazamiento en el estado

    // Calcula si el componente está dentro del área visible
    const elementTop = 5; // El punto en el que aparece el componente (ajústalo según tu diseño)
    const elementBottom = elementTop + 550; // El final del componente

    // Verifica si el componente está dentro del área visible del viewport
    if (scrollY > elementTop && scrollY < elementBottom) {
      setIsVisible(true); // Si está en la vista, hazlo visible
    } else {
      setIsVisible(false); // Si está fuera de la vista, ocultarlo
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Agrega el evento al hacer scroll

    // Limpia el evento cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]); // Solo se activa cuando `scrollY` cambia

  return (
    <motion.div
      initial={{ opacity: 0 }} // Inicialmente invisible
      animate={{ opacity: isVisible ? 1 : 0 }} // Cambia la opacidad según si es visible
      transition={{ duration: 0.5 }} // Duración de la animación
    >
    
     


    <div className={styles.cardAbajoDerecha}> 
        <MyComponent /></div>
    </motion.div>
  );
};

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
     
    

    </div>
  )
}


export default Componente;
