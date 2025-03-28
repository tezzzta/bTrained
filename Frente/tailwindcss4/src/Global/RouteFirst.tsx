import '../App.css';
import Header from '../Headerr';
import { Gallery, CarouselComponent, Footer} from '../components/Aplication';
import Fondo from '../components/Fondo';

function First() {

    return (
        <div className="App w-100">
    
    
    
          <Header />
          <Fondo />
          <Gallery />
          <CarouselComponent />
          <Footer />
        </div>
    );
}


export default First;