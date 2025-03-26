import GradientButton from "./GradientButton";
import styles from "./Create.module.css";

const Card: React.FC = () => {
    return (
      <div className={styles.cardOne}>
        <div className={styles.tools}>
          <div className={styles.inputwrapper}>
            <input type="text" placeholder="Formulario sin nombre..." name="text" className="input" />
          </div>
  
          <div className={styles.card_content}>
            {/* Botón sin funcionalidad */}
            <GradientButton />

             </div>
        </div>
      </div>
    );
  };

  
  export default Card;