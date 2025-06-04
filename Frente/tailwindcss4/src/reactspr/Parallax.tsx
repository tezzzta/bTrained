import React, { useState, useEffect,useRef } from 'react';
import styles from './ParallaxIntro.module.css';
import { motion } from "framer-motion";
// import {PlanetA  , PlanetC, PlanetD, PlanetE, PlanetF, PlanetG} from '../Anim/Planet';

import BlurText from './TryFirts';

import {gsap} from 'gsap';


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
        color: "white",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {isVisible ? (
        <motion.div
          initial={{ opacity: 0, y: 0}} // primero no se ve
          animate={{ opacity: 1, y: ["7px", "-15px", "-1px"] }} //  despues si se ve
          transition={{ duration: 1, delay: 8 }} // Duración de la animación
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


const Componente = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    
    const hideConfig = { y: 0, opacity: 0, scale: 0.5 };
    tl.to("#aaa", hideConfig)
      .to("#bbb", hideConfig, "<")
      .to("#eee", { y: -340, opacity: 0, x: "-125", scale: 1.2 }, "<")
      .to("#ccc", hideConfig, "<")
      .to("#ddd", { y: -245, opacity: 0, x: "-60", scale: 0.5 }, "<");

    
    tl.to("#hhh", { y: 100, opacity: 1, rotation: -360, duration: 1, z: 0, ease: "bounce.out" })
      .to("#hhh", { y: 100, opacity: 1, x: "-200%", rotation: 0, scale: 1.2, duration: 1, ease: "circ.out" })
      .to("#ddd", { y: -245, opacity: 1, x: "-60", scale: 0.5, duration: 1 }, "<")
      .to("#aaa", { y: 15, opacity: 1, x: "22%", scale: 1 }, "<")
      .to("#aaa", {
        y: -50,
        opacity: 0,
        x: "20%",
        scale: 0.5,
        duration: 0.5,
        ease: "expoScale(0,6,9,none)",
      })
      .to("#bbb", { y: -73, opacity: 1, x: "26%", scale: 1, duration: 1 }, "<")
      .to("#bbb", {
        y: -120,
        opacity: 0,
        x: "26%",
        scale: 1,
        duration: 0.5,
        ease: "expoScale(0,6,9,none)",
      })
      .to("#ccc", { y: -160, opacity: 1, x: "20%", scale: 1 }, "<")
      .to("#hhh", {
        y: 100,
        opacity: 0,
        x: "-150%",
        rotation: 0,
        scale: 1.2,
        duration: 1.1,
        ease: "sine.out",
      })
      .to("#eee", {
        y: -340,
        opacity: 1,
        x: "-85",
        rotation: 0,
        scale: 1.2,
        duration: 1,
        ease: "sine.out",
      }, "<")
      .to("#ccc", { y: -160, opacity: 1, x: "30%", scale: 1.4, duration: 1 })
      .to("#eee", { y: -340, opacity: 1, x: "-110", scale: 1.5, duration: 1 }, "<")
      .to("#ddd", { y: -245, opacity: 1, x: "-75", scale: 0.5 }, "<");
  }, []);

  return (
            <div transition-style="in:circle:top-right" className={styles.background}>

  <div className="relative h-screen w-full">
      <Info />

    {/* Grupo animado centrado */}
    <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center space-y-1">
      <p className="text-[3rem] text-white font-semibold" id="hhh">Be</p>
      <p className="text-[3rem] text-white font-semibold" id="aaa">Creative</p>
      <p className="text-[3rem] text-white font-semibold" id="bbb">Influential</p>
      <p className="text-[3rem] text-white font-semibold" id="ccc">Trained</p>
      <p className="text-[3rem] text-white font-bold" id="ddd">-</p>
      <p className="text-[3rem] text-white font-semibold" id="eee">B</p>
    </div>

    {/* BlurText superpuesto, debajo visualmente */}
    <div className="absolute top-[80%] left-1/2 transform -translate-x-1/2 z-10">
      <BlurText
        text="Empieza a crear y sorprende"
        delay={100}
        animateBy="letters"
        direction="bottom"
        className="text-[40px] text-white"
      />
    </div>
  </div>

</div>


  );
};

export default Componente;
