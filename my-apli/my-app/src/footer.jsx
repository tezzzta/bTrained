
import './App.css'
import { Button } from "@nextui-org/react";

function Footerr() {
  return (
    <div class="container">
    <footer class="py-3 my-4">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item"><a href="/" class="nav-link px-2 text-body-secondary" >Home</a></li>
        <li class="nav-item"><a href="/crear" class="nav-link" style="color: #5F9EA0   ;">Crear Transición</a></li>
        <li class="nav-item"><a href="/repertorio" class="nav-link" style="color: #5F9EA0 ;">Repertorio</a></li>

      </ul>
      <p class="text-center text-body-secondary">&copy; 2024 DRT, Inc</p>
    </footer>
  </div>

  );
}

export default App;

