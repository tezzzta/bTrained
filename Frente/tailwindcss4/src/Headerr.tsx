import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {LoginButtom} from './Login/LoginRoutes';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap
import BottomAnim from './Anim/BottomAnim';

function Header() {
  return (
    <header className="py-3 mb-4 border-bottom">
      <Container className="d-flex flex-wrap justify-content-center">
        <Navbar.Brand href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
          <span className="fs-4 text-white">Galería</span>
        </Navbar.Brand>
        <Nav className="nav-pills d-flex align-items-center gap-3" >
          
          <BottomAnim/>

          
         
      <LoginButtom/>
        </Nav>
      </Container>
      
      
    </header>
  );
}

export default Header;
