// import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Forms.module.css'
import { useState } from "react";

export const templates = [
  { title: "Formulario en blanco", image: "https://picsum.photos/400/200?random=1", texto: "El Formulario en blanco consiste en crear tu propio formulario desde cero y a tu preferencia" },
  { title: "Registro para la obtención...", image: "https://picsum.photos/400/200?random=5", texto: "Un formulario en blanco "  },
  { title: "Información de contacto", image: "https://picsum.photos/400/200?random=6", texto: "Un formulario en blanco para empezar desde cero."  },

];

type Template = {
  title: string;
  image: string;
  texto: string;
};






interface TemplatePickerProps {
  setFormData: (key: "nombre" | "template", value: string) => void;
}



export const TemplatePicker: React.FC<TemplatePickerProps> = ({ setFormData }) => {
  

  return (
    <div>

     <Container className={styles.container}>
      <Row className="g-6 justify-content-center">
        {templates.map((card: Template) => (
          <Col sm={3} md={3} key={card.title} className="justify-center">
            <div 
              className={styles.template} 
              onClick={() => setFormData( 'template', card.title)}
              style={{ cursor: "pointer", border: "2px solid transparent", padding: "5px" }}
            >
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
   

    </div>
  
  );
};


export const Forma: React.FC<TemplatePickerProps> = ({ setFormData }) => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  const toggleVisible = (index: number) => {
    setVisibleIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className='grid grid-cols-1 m-5'>
      <div className='grid bg-amber-300 w-3/4 rounded p-4 m-auto grid-cols-1 lg:w-1/2'>
        {templates.map((card: Template, index) => (
          <Container key={card.title} className='m-2 p-2 border-b border-gray-300'>
            <p className='font-semibold mb-2'>{card.title}</p>

            <button
              onClick={() => toggleVisible(index)}
              className='text-sm text-blue-600 hover:underline'
            >
              {visibleIndex === index ? "Ocultar" : "Mostrar"}
            </button>

            {visibleIndex === index && (
              <div className="mt-2 p-3  rounded hover:bg-gray-200">
                <p className='flex justify-center'>{card.texto}</p>
                <button
                  onClick={() => setFormData('template', card.title)}
                >
                  Seleccionar
                </button>
              </div>
            )}
          </Container>
        ))}
      </div>
    </div>
  );
};