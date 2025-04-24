import { useState } from "react";
import GradientButton from "./GradientButton";
import styles from "./Create.module.css";

import type { Formulario } from "../Store/IntZus.d.ts";



// const [localValue, setLocalValue] = useState("");

interface TemplatePickerProps {
  nombre: string;
  setFormData: (nombre: keyof Formulario, value: string) => void;
}


const Card: React.FC<TemplatePickerProps> = ({ nombre, setFormData}) => {

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
          value={nombre} // Debe estar ligado a formData.nombre
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