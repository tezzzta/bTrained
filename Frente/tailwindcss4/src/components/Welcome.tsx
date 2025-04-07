import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './harry.css';  

const WelcomeSection: React.FC = () => {
  return (
    <Container className="py-10 text-center text-white welcome-container  rounded-lg">
      <h1 className="text-4xl font-bold">Bienvenido</h1>
      <p className="mt-4 text-lg">
        Para estudiar, para distraerte o para crear...
      </p>
  

      
    </Container>
    
  );
};

export default WelcomeSection;
