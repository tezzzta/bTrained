import styles from "./peter.module.css"; 


const PricingCard = () => {
    return (
      <div className={styles.card}>
        <div className={styles.pricingBlockContent}>
          <p className={styles.pricingPlan}>Crea Evaluaciones interactivas para compartir</p>
          <div className={styles.priceValue}>
            <p className={styles.priceNumber}><span></span></p>
          </div>
         
          <ul className={styles.checkList}>
            <li className={styles.checkListItem}>Revisa otros proyectos</li>
            <li className={styles.checkListItem}>Más soluciones de Software acá </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default PricingCard;