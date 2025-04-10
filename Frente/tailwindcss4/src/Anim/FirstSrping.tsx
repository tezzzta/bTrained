import {  useSpringRef,useSpring, animated } from '@react-spring/web'
import {motion} from 'framer-motion'

const Apicomponent = () =>{
  const api = useSpringRef<{x: number}>()
  const springs = useSpring({
    ref: api,
    from: { x: 0 },
  })
  const handleClick = () => {
    api.start({
      to: {
        x: springs.x.get() === 100 ? 0 : 100,
      },
    })
  }

  return (
    <div className="flex-container"> 


        <div>
        <animated.div
        onClick={handleClick}
        style={{
          width: 80,
          height: 80,
          background: '#ff6d6d',
          borderRadius: 8,
          transform: springs.x.to((x) => `translateX(${x}px)`),
        }as any  }
      />
        </div>
      <span>Render ID – {Math.random()}</span>
    </div>
  )
}













export default function MyComponent() {
    const springs = useSpring({
        from: { x: 0 },
        to: { x: 100 },
      })
    return (
      <motion.div
        initial={{ opacity: 0, y: 0}} 
        animate={{ opacity: 1, y: ["7px", "-15px", "-1px"] }} 
        transition={{ duration: 1, delay: 2 }} 
      
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
      </motion.div>
      
    )
  }
  