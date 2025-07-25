import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './harry.css';
import { Link } from 'react-router-dom';
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
                                <Link
                  to={slide.link}
                  className="bg-[#4F46E5] text-white py-2 px-4 inline-block rounded-full hover:bg-[#7C3AED]"
                >
                  Ver más
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default CarouselComponent;
