import React from 'react';
import { Button, Carousel, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './harry.css';

const CarouselComponent: React.FC = () => {
  const slides = [
    { title: "Primer Slide", text: "Descripción del primer slide.", link: "https://picsum.photos/650/300?random=1" },
    { title: "Segundo Slide", text: "Descripción del segundo slide.", link: "https://picsum.photos/650/300?random=2" },
    { title: "Tercer Slide", text: "Descripción del tercer slide.", link: "https://picsum.photos/650/300?random=3" },
  ];

  return (
    <section className="py-5 carousel-section">
      <Container className="text-center">
        <h2 className="mb-4">Explora Nuestro Carrusel</h2>
               <Carousel className="w-75 mx-auto"> 
          {slides.map((slide, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100 rounded" src={slide.link} alt={slide.title} style={{ filter: 'brightness(0.85)' }} />
              <Carousel.Caption className="text-center">
                <h5>{slide.title}</h5>
                <p>{slide.text}</p>
                <Button variant="primary" size="sm" href={slide.link} style={{ borderRadius: '20px' }}>Ver más</Button>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default CarouselComponent;
