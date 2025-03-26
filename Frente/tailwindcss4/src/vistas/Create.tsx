import Header from '../Headerr';
import Footer from '../components/Footer';
import CardTwo from './CardTwo';
// import { useState } from 'react';
import GradientButton from './GradientButton';
import React from 'react';
import Card from './CardOne';
import styles from "./principal.module.css";


const Create = () => {
  return (
    <section className={styles.micolorsection}>
      <div>
        <Header />
        <div className={styles.cardContainer}>
          <Card />
          
        </div>
        <CardTwo />
             <Footer  />
      </div>
    </section>
  );
};

export default Create;