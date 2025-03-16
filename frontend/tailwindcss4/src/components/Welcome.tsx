import React from 'react';
import { Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// Componente de Bienvenida
const WelcomeSection: React.FC = () => {
  return (
    <Container className="py-5 text-center text-white welcome-container">
      <h1>Bienvenido</h1>
      <p>Para estudiar, para distraerte o para crear...</p>
    </Container>
  );
};

export default WelcomeSection;
