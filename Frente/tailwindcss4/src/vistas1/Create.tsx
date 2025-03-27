import Header from '../Headerr';
import Footer from '../components/Footer';
import CardTwo from './CardTwo';
// import { useState } from 'react';
import GradientButton from './GradientButton';
import Card from './CardOne';
import styles from "./principal.module.css";
import {TemplatePicker} from './Forms';
// import {CardLogin} from '../Login/LoginRoutes';


const Create = () => {
  return (
    <section className={styles.micolorsection}>
      <div className="w-full ">
        <Header />
        <div className={styles.cardContainer}>
          <Card />
       
        </div>
    
        <TemplatePicker />


      <div className="w-full">
      <Footer  />
      
      </div>
     
      </div>
    </section>
  );
};

export default Create;