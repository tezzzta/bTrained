import { motion } from "framer-motion";
import Header from "../Headerr"

const HeaderSp= () => {
    
  
 
  
   return (
    
    <motion.div
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1  }} 
    transition={{ duration: 1.8, delay:0.5 }} 
    >
    <Header />

    </motion.div>
   )
}

export default HeaderSp;