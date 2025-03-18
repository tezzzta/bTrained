import styles from "./fondo.module.css";
import { MjCard, PricingCard, CardFour } from "./CardComponents";

const Fondo = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cardArribaIzquierda}> <CardFour/> </div>
            <div className={styles.cardAbajoDerecha}> <PricingCard/> </div> {/* Corregido */}
        </div>
    );
};

export default Fondo;
