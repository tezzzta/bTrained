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
    </Container>
  );
};

export default WelcomeSection;
