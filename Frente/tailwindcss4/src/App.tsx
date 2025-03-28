import { useEffect } from 'react';
import First from './Global/RouteFirst';
import { Create } from './Global/RouteCreate';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {Inicio} from './Global/RouteLogin';

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
      

      <div className="App w-100">
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/login" element={<Inicio />} />
          <Route path="/signup" element={<Create />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
