import {  useSpringRef,useSpring, animated } from '@react-spring/web'
import {motion} from 'framer-motion'
import type { Formulario} from '../Store/IntZus'



// ESTE ES UNA INTERFAZ PARA RECIBIR INFO DE DATA/PADRE
interface OtroComponenteProps {
  formData: {
    nombre: string;
    template: string;
  };
}
export default function MyComponent({formData}:OtroComponenteProps ){
      const springs = useSpring({
          from: { x: 0 },
          to: { x: 100 },
        })
      return (
        <motion.div
          initial={{ opacity: 0, y: 0}} 
          animate={{ opacity: 1, y: ["7px", "-15px", "-1px"] }} 
          transition={{ duration: 1, delay: 0.2 }} 
        
        >

          <animated.div
        style={{
          transform: springs.x.to((x) => `translateX(${x}px)`), 
          width: 80,
          height: 80,
          background: '#ff6d6d',
          borderRadius: 8,
        }}
      
        /> 

        <div>
        <p>Nombre: {formData.nombre}</p>
        <p>Template: {formData.template}</p>


        </div>
          
        </motion.div>
        
      )
    }
  