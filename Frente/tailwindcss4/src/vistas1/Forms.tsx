// import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Forms.module.css'
import { useState } from "react";

export const templates = [
  { id: 1, title: "Formulario en blanco", image: "../public/img.jpeg", texto: "El Formulario en blanco consiste en crear tu propio formulario desde cero y a tu preferencia" },
  { id: 2, title: "Registro para la obtención...", image: "https://picsum.photos/400/200?random=5", texto: "Un formulario en blanco "  },
  { id: 3, title: "Información de contacto", image: "https://picsum.photos/400/200?random=6", texto: "Un formulario en blanco para empezar desde cero."  },

];

type Template = {
    id: number;
  title: string;
  image: string;
  texto: string;
};






interface TemplatePickerProps {
  setFormData: (key: "nombre" | "template", value: string) => void;
  onSelect: (id: number) => void;
}

export const TemplatePicker: React.FC<TemplatePickerProps> = ({ setFormData, onSelect }) => {
  return (
    <Container className={styles.container}>
      <Row className="g-6 justify-content-center">
        {templates.map((card) => (
          <Col sm={3} md={3} key={card.id} className="justify-center">
            <div
              className={styles.template}
              onClick={() => {
                setFormData("template", card.title);
                onSelect(card.id);
              }}
              style={{ cursor: "pointer", border: "2px solid transparent", padding: "5px" }}
            >
              <div className={styles.card}>
                <img src={card.image} alt={card.title} className="p-10" />
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



export const Forma: React.FC<TemplatePickerProps> = ({ setFormData }) => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  const toggleVisible = (index: number) => {
    setVisibleIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className='grid grid-cols-1 m-5'>
      <div className='grid bg-[#1E293B] w-[95%] rounded p-4 m-auto grid-cols-1 lg:w-1/2'>
        {templates.map((card: Template, index) => (
          <Container key={card.title} className='m-2 p-2 border-b border-gray-300'>
            <p className='font-semibold mb-2'>{card.title}</p>

            <button
              onClick={() => toggleVisible(index)}
              className='text-sm  text-white bg-[#493fff] rounded p-1  hover:bg-[#7C3AED] transition duration-200'
            >
              {visibleIndex === index ? "Ocultar" : "Mostrar"}
            </button>

            {visibleIndex === index && (
              <div className="mt-2 p-3  rounded transition duration-300">

                <p className='flex justify-center'>{card.texto}</p>
                <img src={card.image} alt={card.title} className="m-auto w-1/2 h-1/2" />

                <section className='flex justify-center items-center px-10 py-5'>
                  <button
                  onClick={() => setFormData('template', card.title)}
                  className=' mt-2 bg-[#4F46E5] text-white font-semibold rounded py-2 px-4 hover:bg-[#7C3AED] transition duration-200'
                >
                  Seleccionar
                </button>
                </section>
              </div>
            )}
          </Container>
        ))}
      </div>
    </div>
  );
};