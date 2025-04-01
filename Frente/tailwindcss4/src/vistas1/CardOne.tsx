import { useState } from "react";
import GradientButton from "./GradientButton";
import styles from "./Create.module.css";

const Card: React.FC<{ setProjectName: (name: string) => void }> = ({ setProjectName }) => {
  return (
    <div className={styles.cardOne}>
      <div className={styles.tools}>
        <div className={styles.inputwrapper}>
          <input 
            type="text" 
            placeholder="Formulario sin nombre..." 
            name="text" 
            className="input"
            onChange={(e) => setProjectName(e.target.value)} 
          />
        </div>

        <div className={styles.card_content}>
          <GradientButton />
        </div>
      </div>
    </div>
  );
};

export default Card;