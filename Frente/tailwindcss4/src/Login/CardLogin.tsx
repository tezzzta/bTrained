import Login from './Login';

import SignUP from './SignUp';
import styles from "./CardLog.module.css";

const CardLogin = () => {
    return (
        <div className={styles.card}>
            <div className={styles.container} >
                <SignUP />
            </div>
        </div>
    );
};

export default CardLogin;