import React, { useState, useEffect,useRef } from 'react';
import styles from './ParallaxIntro.module.css';
import { motion } from "framer-motion";
// import {PlanetA  , PlanetC, PlanetD, PlanetE, PlanetF, PlanetG} from '../Anim/Planet';

import BlurText from './TryFirts';

import gsap from 'gsap';


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


const texto = "B-Trained";


const Componente= () => {
  return (
    <div transition-style="in:circle:top-right" className={styles.background}>
   

      
     <div className='justify-center items-center flex flex-col  mt-[30vh]'>
        

     <div className="absolute inset-0 bg-gradient-to-r bg-clip-text text-transparent animate-gradient">
          
        </div>
            
            {/* <div className={styles.ryan}>
              <BlurText
          text={texto}
          
          delay={160}
          animateBy="words"
          direction="top"
          className={styles.ryan}
        />
            </div>
        <BlurText
          text="Empieza a crear y sorprende "
          
          delay={100}
          animateBy="letters"
          direction="bottom"
          className="text-2xl mb-2 text-[40px]"
        />
           */}



          </div>
      <Info/>


    </div>
  )
}


export default Componente;
