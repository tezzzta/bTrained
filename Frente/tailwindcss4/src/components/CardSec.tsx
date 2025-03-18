import styles from "./peter.module.css"; // Importa el archivo CSS


const PricingCard = () => {
    return (
      <div className={styles.card}>
        <div className={styles.pricingBlockContent}>
          <p className={styles.pricingPlan}>Starter</p>
          <div className={styles.priceValue}>
            <p className={styles.priceNumber}>$<span>0</span></p>
            <div>/mo</div>
          </div>
          <div className={styles.pricingNote}>Free forever</div>
          <ul className={styles.checkList}>
            <li className={styles.checkListItem}>✔ Lorem Ipsum</li>
            <li className={styles.checkListItem}>✔ Lorem Ipsum</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default PricingCard;