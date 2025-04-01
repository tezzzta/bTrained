import { useEffect } from 'react';
import First from './Global/RouteFirst';
import { Create } from './Global/RouteCreate';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {Inicio} from './Global/RouteLogin';
import  Componente from './reactspr/Parallax'



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
    <BrowserRouter>
    
      <div className="App w-full">
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/login" element={<Inicio />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
