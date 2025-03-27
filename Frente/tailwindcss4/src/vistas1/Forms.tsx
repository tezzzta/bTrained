// import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Forms.module.css'

export const templates = [
  { title: "Formulario en blanco", image: "https://picsum.photos/400/200?random=1" },
  { title: "Registro para la obtención...", image: "https://picsum.photos/400/200?random=5" },
  { title: "Información de contacto", image: "https://picsum.photos/400/200?random=6" },

];

type Template = {
  title: string;
  image: string;
};

export const TemplatePicker = () => {
  return (







    <Container className={styles.container}>
    <Row className="g-6 justify-content-center"> 
      {templates.map((card: Template) => (
        <Col sm={3} md={3} key={card.title} className="justify-center"> 
          <div className={styles.template}>  
            <div className={styles.card}>
              <img src={card.image} alt={card.title} className={styles.miImagenEstilo} />
            </div>
          </div>
          <div className="text-white">
            <p>{card.title}</p>
          </div>
        </Col>
      ))}
    </Row>
  </Container>
  );
};


