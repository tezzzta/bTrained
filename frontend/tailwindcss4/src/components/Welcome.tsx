import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './harry.css'; // Aquí podrían estar tus estilos personalizados

const WelcomeSection: React.FC = () => {
  return (
    <Container className="py-5 text-center text-white welcome-container bg-blue-500 rounded-lg">
      <h1 className="text-4xl font-bold">Bienvenido</h1>
      <p className="mt-4 text-lg">
        Para estudiar, para distraerte o para crear...
      </p>
      {/* <div 
    className="absolute inset-0 w-full h-full" 
    style={{ 
        background: "linear-gradient(137.92deg, rgba(173, 216, 230, 0) 20.43%, rgba(173, 216, 230, 0) 49.66%, rgba(173, 216, 230, 0) 982.38%)" 
    }} 
></div> */}

      
    </Container>
    
  );
};

export default WelcomeSection;
