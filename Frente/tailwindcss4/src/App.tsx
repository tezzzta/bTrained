// import { useState } from 'react';
import './App.css';
// import Botone from './Firstn';
import Header from './Headerr';
import { WelcomeSection, Gallery, CarouselComponent, Footer} from './components/Aplication';
import Fondo from './components/Fondo';
// import MyComponent from './Fra-mer-motion/MotionOne';
// import Sidebar from './components/Slidebar';


function App() {

  return (
    <div className="App w-100">
        <Header />
        {/* <MyComponent /> */}
        {/* <Sidebar /> */}

        <WelcomeSection />
        <Fondo />
        <Gallery/>
        <CarouselComponent />
        <Footer />

    </div>
  );
}

export default App;