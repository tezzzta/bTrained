import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {LoginButtom} from './Login/LoginRoutes';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importando ando 
import BottomAnim from './Anim/BottomAnim';

function Header() {
  return (
    <header className="py-3 mb-4 border-bottom ">
      <Container className=" d-flex flex-wrap justify-content-center gap-2">
        <Navbar.Brand href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto p-2 m-3 text-decoration-none hover:bg-gray-600 rounded">
          <span className="flex justify-start fs-4 text-[#CBD5E1] font-semibold ">B-Trained</span>
        </Navbar.Brand>
        <Nav className="nav-pills d-flex align-items-center gap-3 " >
          
          <BottomAnim/>

          
         
      <LoginButtom/>
        </Nav>
      </Container>
      
      
    </header>
  );
}

export default Header;
