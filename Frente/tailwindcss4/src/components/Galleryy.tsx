import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Gallery.module.css';
import { cardsData, CardData } from '../Data/Dataexam';

const getRandomCards = (data: CardData[], count: number): CardData[] => {
  return [...data] 
    .sort(() => Math.random() - 0.5) // Mezcla los elementos aleatoriamente
    .slice(0, count); 
};

const Gallery: React.FC = () => {
  const randomCards = getRandomCards(cardsData, 6);

  return (
    <Container className="album py-5 gallery-section">
      <Row className="g-3 justify-content-center">
        {randomCards.map((card: CardData) => (
          <Col key={card.id} sm={6} md={4}> 
            <div className={styles.cardBox}>
              <div className={styles.card}>
              <img src={card.img} alt={card.title} className={styles.cardImg} />

                <h4>{card.title}</h4>
                <div className={styles.content}>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;