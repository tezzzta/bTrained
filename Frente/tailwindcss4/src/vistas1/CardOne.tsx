import { useState } from "react";
import GradientButton from "./GradientButton";
import styles from "./Create.module.css";



// const [localValue, setLocalValue] = useState("");

interface TemplatePickerProps {
  setFormData: (template: string, value: string) => void;
  nombre: string;
}


const Card: React.FC<TemplatePickerProps> = ({ setFormData, nombre}) => {

  // esta constante es para recibir nombre y valor
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "nombre" || name === "template") {
      setFormData(name, value);
    }
  };

  return (
    <div className={styles.cardOne}>
      <div className={styles.tools}>
        <div className={styles.inputwrapper}>
          <input 
            type="text" 
            placeholder="Formulario sin nombre..." 
            name="nombre"  
            className="input"
            value={nombre}
            onChange={(e) => setFormData("nombre", e.target.value)}
            />
        </div>

        <div className={styles.card_content}>
           <GradientButton onClick={() => setFormData("nombre", nombre)} />
        </div>
      </div>
    </div>
  );
};

export default Card;