import Header from '../Headerr';
import Footer from '../components/Footer';
import styles from './Create.module.css';
 

const Card = () => {
  return (
    <div className={styles.cardOne}>
      
        <div className={styles.tools}>
        <div className={styles.inputwrapper}>
               <input type="text" placeholder="Formulario sin nombre..." name="text" className="input"/>
           </div>
      </div>
      <div className={styles.card_content}>
      </div>

      
    </div>

  );
};

const CardTwo = () => {
  return (
    <div className={styles.cardtwo}>
      <div className={styles.tools}>
        <div className={styles.circle}>
          <span className={`${styles.box} ${styles.red}`}></span>
        </div>
        <div className={styles.circle}>
          <span className={`${styles.box} ${styles.yellow}`}></span>
        </div>
        <div className={styles.circle}>
          <span className={`${styles.box} ${styles.green}`}></span>
        </div>
      </div>
      <div className={styles.card_content}>
      </div>
    </div>
  );
};





const Create = () => {
  return (
   <section className={styles.micolorsection}>
    <div>
      <Header />
      <div className={styles.cardContainer}>
      <Card />
      </div>
      <CardTwo />
      <Footer />
    </div>
    </section>
  );
};

export default Create;