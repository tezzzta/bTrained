import styles from "./fondo.module.css";
import { PricingCard, CardFour } from "./CardComponents";

const Fondo = () => {
    return (
        <div className={`m-15 ${styles.container}`}>

            <div className={styles.cardArribaIzquierda}> <CardFour/> </div>
            <div className={styles.cardAbajoDerecha}> <PricingCard/> </div> {/* Corregido */}
        </div>
    );
};

export default Fondo;
