import Login from './Login';
import styles from "./CardLog.module.css";

const CardLogin = () => {
    return (
        <div className={styles.card}>
            <div className={styles.container} >
                <Login />
            </div>
        </div>
    );
};

export default CardLogin;