import { useSpring, animated } from '@react-spring/web'



export default function MyComponent() {
    const springs = useSpring({
        from: { x: 0 },
        to: { x: 100 },
      })
    return (
      <animated.div
      style={{
        transform: springs.x.to((x) => `translateX(${x}px)`), // Aplica la animación
        width: 80,
        height: 80,
        background: '#ff6d6d',
        borderRadius: 8,
      }}
      /> 
    )
  }
  