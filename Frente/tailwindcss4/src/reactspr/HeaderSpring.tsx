import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../Headerr"

const HeaderSp= () => {
    
   const [scrollY, setScrollY] = useState(0); 
   const [isVisible, setIsVisible] = useState(false); 
 
   const handleScroll = () => {
     setScrollY(window.scrollY); 
     const elementTop = 5; 
     const elementBottom = elementTop + 1550; 
 
     if (scrollY > elementTop && scrollY < elementBottom) {
       setIsVisible(true); 
     } else {
       setIsVisible(false); 
     }
   };
 
   useEffect(() => {
     window.addEventListener('scroll', handleScroll); 
 
     return () => {
       window.removeEventListener('scroll', handleScroll);
     };
   }, [scrollY]); 

   return (
    
    <motion.div
    initial={{ opacity: 0 }} 
    animate={{ opacity: isVisible? 1:0  }} 
    transition={{ duration: 1.8, delay:1.5 }} 
    >
    <Header />

    </motion.div>
   )
}

export default HeaderSp;