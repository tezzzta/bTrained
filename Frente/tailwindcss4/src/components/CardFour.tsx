import styles from './CardFour.module.css'

const CardFour = () => {
    return (
<div className={styles.notification}>
    <div className={styles.notiglow}></div>
    <div className={styles.notiborderglow}></div>
    <div className={styles.notititle}> Bienvenido :D </div>
    <div className={styles.notibody}> Para crear, estudiar o divertirse... </div>
  </div>
    )
}

export default CardFour;