import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './harry.css';

const Gallery: React.FC = () => {
    const cards = Array.from({ length: 6 }, (_, i) => i);
    
    return (
      <Container className="album py-5 bg-light">
        <Row className="g-3">
          {cards.map((_, index) => (
            <Col key={index} sm={6} md={4}>
              <Card className="shadow-sm" style={{ borderRadius: '15px' }}>
                <Card.Img 
                  variant="top" 
                  src="https://via.placeholder.com/600x225" 
                  style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
                />
                <Card.Body>
                  <Card.Text>Contenido de tarjeta dinámico o estático.</Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Button variant="outline-primary" size="sm">Ver</Button>
                      <Button variant="outline-primary" size="sm">Editar</Button>
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