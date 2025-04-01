import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../Headerr"

const HeaderSp= () => {
    
   const [scrollY, setScrollY] = useState(0); // Estado para almacenar el desplazamiento
   const [isVisible, setIsVisible] = useState(false); // Estado para controlar la visibilidad
 
   // Función para manejar el scroll
   const handleScroll = () => {
     setScrollY(window.scrollY); // Actualiza el desplazamiento en el estado
 
     // Calcula si el componente está dentro del área visible
     const elementTop = 5; // El punto en el que aparece el componente (ajústalo según tu diseño)
     const elementBottom = elementTop + 1550; // El final del componente
 
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
    animate={{ opacity: isVisible? 1:0  }} // Cambia la opacidad según si es visible
    transition={{ duration: 3.5 }} // Duración de la animación
    >
    <Header />

    </motion.div>
   )
}

export default HeaderSp;