import React, { useState, useEffect,useRef } from 'react';
import styles from './ParallaxIntro.module.css';
import { motion } from "framer-motion";
// import {PlanetA  , PlanetC, PlanetD, PlanetE, PlanetF, PlanetG} from '../Anim/Planet';

import BlurText from './TryFirts';

const handleAnimationComplete = () => {
  console.log('Animation completed!');  
};


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
          initial={{ opacity: 0, y: 0}} // primero no se ve
          animate={{ opacity: 1, y: ["7px", "-15px", "-1px"] }} //  despues si se ve
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










//haré un breve ensayo de un nuevo componente 





const Componente= () => {
  return (
    <div transition-style="in:circle:top-right" className={styles.background}>
   

      
     <div className='justify-center items-center flex flex-col  mt-[35vh]'>
        

     <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-pink-500 bg-clip-text text-transparent animate-gradient">
          
        </div>
            <BlurText
          text="B-Train"
          
          delay={160}
          animateBy="words"
          direction="top"
          className={styles.ryan}
        />
        <BlurText
          text="Empieza a crear y sorprende "
          
          delay={100}
          animateBy="letters"
          direction="bottom"
          className="text-2xl mb-2 text-[40px]"
        />
          </div>
      {/* <Planetas/> */}
      <Info/>


    </div>
  )
}


export default Componente;
