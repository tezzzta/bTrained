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

const words = "Empieza a crear y sorprende".split(" ");

const Texxt = () => {
  
  return (
    <div
      style={{
        color: "white",
        textAlign: "center",
        padding: "20px",
      }}
    >
      
         {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4 + i * 0.2, duration: 0.2 }}
              className="inline-block mr-2 text-[32px]"
            >
              {word}
            </motion.span>
          ))}
    </div>
  )
}







//haré un breve ensayo de un nuevo componente 



const texto = "B-Trained";

const frases = ["Creative", "Influential", " "];

const Componente = () => {
    const [index, setIndex] = useState(0);
   const Refer = useRef(null);

  useEffect(() => {
     const mainTl = gsap.timeline(); // Para animación base (#hhh, #ddd, #eee)
     const frasesTl = gsap.timeline(); // Para frases
     const mainT2 = gsap.timeline(); // Para animación de #xxx
    
    const hideConfig = { opacity: 0, scale: 1 };
    //este es para ocultar los elementos al inicio mi bro
                  mainTl.to("#hhh", { y: 100, opacity: 1, rotation: -360, duration: 1, z: 0, ease: "bounce.out" })
                .to("#xxx", { y: 100, opacity: 0, x: "20%", rotation: 0, scale: 0.1 }, "<") 
                .to("#ddd", {y: 10, x: "-75", ...hideConfig}, "<")
                .to("#eee", {y: -80, x: "-120", ...hideConfig}, "<")
                .add(frasesTl) // 💡 Insertamos frases después de mainTl

                .to("#hhh", { y: 100, opacity: 1, x: "-200%", rotation: 0, scale: 1.2, duration: 1, ease: "circ.out" })

                .to("#hhh", { y: 100, opacity: 1, x: "-200%", rotation: 0, scale: 1.2, duration: 2 , ease: "circ.out" })
                .add(mainT2)
  
                .to("#ddd", { y: 10, opacity: 1, x: "-75", scale: 1, ease: "slow(0.7,0.7,false)"})
                .to("#hhh", { y: 100, opacity: 0, x: "-150%", rotation: 0, scale: 1.2, duration: 1, ease: "sexpoScale(0.5,7,none)" }, "<") 

                .to("#eee", { y: -80, opacity: 1, x: "-110", rotation: 0, scale: 1.2, duration: 1, ease: "sine.out" }, "<")
                .to("#eee", { y: -78, opacity: 1, x: "-110", scale: 1.3, duration: 1.5, ease: "sexpoScale(0.5,7,none)" }, "<")
                
              ;

              frases.forEach((frase, i) => {
              frasesTl.to(Refer.current, { opacity: 0, y: -100, x:35 , duration: 0.3, onComplete: () => setIndex(i) },"<")
              frasesTl.fromTo(Refer.current, { opacity: 0, y: -300, x:35  }, { opacity: 1, x:42 , y: -162, scale: 1, duration: 0.8 })
              frasesTl.to({}, { y:  -200,  duration: 1 })
            }); 

            mainT2.to("#xxx", { y: 100, opacity: 0, x: "20%", rotation: 0, scale: 1.2, duration: 1 })
            .to("#xxx", { y: 100, opacity: 1, x: "20%", rotation: 0, scale: 1.3, duration: 0.2 })

            }, []);

  return (
            <div transition-style="in:circle:top-right" className={styles.background}>

  <div className="relative h-screen w-full">

    {/* Grupo animado centrado */}
    <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center space-y-1">
      <p className="text-[3rem] text-white font-semibold" id="hhh">Be</p>
      <p className="text-[3rem] text-white font-bold" id="ddd">-</p>
      <p className="text-[3rem] text-white font-semibold" id="eee">B</p>        
      <p ref={Refer}  className="text-[3rem] text-white font-semibold" >  {frases[index]}</p> 
      <p className="absolute text-[3rem] text-white font-semibold z-[999]  pointer-events-none" id="xxx">Trained</p>


    </div>

    {/* BlurText superpuesto, debajo visualmente */}
    <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 z-0 ">
      <Texxt/>
    </div>
          <Info />

  </div>

</div>


  );
};

export default Componente;
