import { useEffect } from 'react';
import './App.css';
// import Botone from './Firstn';
import Header from './Headerr';
import { WelcomeSection, Gallery, CarouselComponent, Footer} from './components/Aplication';
import Fondo from './components/Fondo';
// import MyComponent from './Fra-mer-motion/MotionOne';
// import Sidebar from './components/Slidebar';

function App() {
  useEffect(() => {
    const preventZoom = (event: WheelEvent) => {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    };

    window.addEventListener("wheel", preventZoom, { passive: false });

    return () => {
      window.removeEventListener("wheel", preventZoom);
    };
  }, []);

  return (
    <div className="App w-100">
      <Header />
      {/* <WelcomeSection /> */}
      <Fondo />
      <Gallery />
      <CarouselComponent />
      <Footer />
    </div>
  );
}

export default App;