import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './harry.css';
import { cardsData, CardData } from '../Data/Dataexam';

const getRandomCards = (data: CardData[], count: number): CardData[] => {
  return [...data] 
    .sort(() => Math.random() - 0.5) // Mezcla los elementos aleatoriamente
    .slice(0, count); 
};

const Gallery: React.FC = () => {
  const randomCards = getRandomCards(cardsData, 6); // Selecciona 6 cartas aleatorias

  return (
    <Container className="album py-5 bg-light">
      <Row className="g-3 justify-content-center">
        {randomCards.map((card: CardData) => (
          <Col key={card.id} sm={6} md={4}>
            <Card className="shadow-sm" style={{ borderRadius: "15px" }}>
              <Card.Img
                variant="top"
                src={card.img}
                style={{ borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}
              />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <Button variant="outline-primary" size="sm">
                      Ver
                    </Button>
                    <Button variant="outline-primary" size="sm">
                      Editar
                    </Button>
                  </div>
                  <small className="text-muted">9 mins</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;