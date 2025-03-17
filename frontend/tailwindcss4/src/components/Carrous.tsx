import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './harry.css';

const CarouselComponent: React.FC = () => {
  const slides = [
    { title: "Primer Slide", text: "Descripción del primer slide.", link: "/views/repertorio" },
    { title: "Segundo Slide", text: "Descripción del segundo slide.", link: "/views/crear" },
    { title: "Tercer Slide", text: "Descripción del tercer slide.", link: "#" }
  ];
  
  return (
    <Carousel>
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src="/imagen-rr.png" alt={slide.title} style={{ filter: 'brightness(0.8)' }} />
          <Carousel.Caption className="text-start">
            <h1>{slide.title}</h1>
            <p>{slide.text}</p>
            <Button variant="primary" size="lg" href={slide.link} style={{ borderRadius: '20px' }}>Ver más</Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;