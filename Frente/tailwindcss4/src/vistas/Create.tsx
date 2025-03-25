import Header from '../Headerr';
import Footer from '../components/Footer';
import styles from './Create.module.css';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from "react";

 




const BottomArrow: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.bottomarrowcontainer}  onClick={() => setIsOpen(!isOpen)}>
      <button className={styles.bottomarrowbutton}>
        <ChevronDown size={32} />
      </button>
      {isOpen && <Dropdown />}
    </div>
  );
};



const Card = () => {
  return (
    <div className={styles.cardOne}>
      
        <div className={styles.tools}>
               <div className={styles.inputwrapper}>
                        <input type="text" placeholder="Formulario sin nombre..." name="text" className="input"/>
                </div>
          
                <div className={styles.card_content}>
                  <BottomArrow />
                   
                 </div>
        </div>

      
    </div>

  );
};

const CardTwo = () => {
  return (
    <div className={styles.cardtwo}>
      <div className={styles.tools}>
        <div className={styles.circle}>
          <span className={`${styles.box} ${styles.red}`}></span>
        </div>
        <div className={styles.circle}>
          <span className={`${styles.box} ${styles.yellow}`}></span>
        </div>
        <div className={styles.circle}>
          <span className={`${styles.box} ${styles.green}`}></span>
        </div>
      </div>
      <div className={styles.card_content}>
      </div>
    </div>
  );
};


const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para manejar clic en una opción del menú
  const handleOptionClick = (option: string) => {
    console.log(`Seleccionaste: ${option}`);
    setIsOpen(false); // Cierra el menú después de seleccionar
  };

  return (
    <div className="dropdown-container">
      {/* Botón que abre/cierra el menú */}
      <button
        className="dropdown-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <ChevronRight size={24} />
      </button>

      {/* Menú desplegable */}
      <div className={`dropdown-menu ${isOpen ? "active" : ""}`}>
        <button className="dropdown-item" onClick={() => handleOptionClick("Opción 1")}>
          Opción 1
        </button>
        <button className="dropdown-item" onClick={() => handleOptionClick("Opción 2")}>
          Opción 2
        </button>
        <button className="dropdown-item" onClick={() => handleOptionClick("Opción 3")}>
          Opción 3
        </button>
      </div>
    </div>
  );
};






const Create = () => {
  return (
   <section className={styles.micolorsection}>
    <div>
      <Header />
      <div className={styles.cardContainer}>
      <Card />
      </div>
      <CardTwo />
      <Footer />
    </div>
    </section>
  );
};

export default Create;