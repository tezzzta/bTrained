import styles from "./fondo.module.css";
import { MjCard, PricingCard } from "./CardComponents";

const Fondo = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cardArribaIzquierda}> <MjCard/> </div>
            <div className={styles.cardAbajoDerecha}> <PricingCard/> </div> {/* Corregido */}
        </div>
    );
};

export default Fondo;
