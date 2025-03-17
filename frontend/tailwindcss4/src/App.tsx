// import { useState } from 'react';
import './App.css';
// import Botone from './Firstn';
import Header from './Headerr';
import { WelcomeSection, Gallery, CarouselComponent} from './components/Aplication';


function App() {

  return (
    <div className="App w-100">
        <Header />
        <WelcomeSection />
        <Gallery />
        <CarouselComponent />
    </div>
  );
}

export default App;