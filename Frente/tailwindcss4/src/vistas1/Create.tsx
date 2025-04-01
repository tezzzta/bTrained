import { useState } from "react";
import Header from '../Headerr';
import Footer from '../components/Footer';
// import CardTwo from './CardTwo';
import Card from './CardOne';
import styles from "./principal.module.css";
import {TemplatePicker} from './Forms';
import MyComponent from "../Anim/FirstSrping";
const Create = () => {
  const [projectName, setProjectName] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState("");

  const handleStart = () => {
    alert(`Iniciando proyecto: ${projectName} con plantilla ${selectedTemplate}`);
    // Aquí puedes navegar a la siguiente ventana o hacer lo que necesites
  };

  return (
    <section className={styles.micolorsection}>
      <div className="w-full">
        <Header />
        <div className={styles.cardContainer}>
          <Card setProjectName={setProjectName} />
        </div>

        <TemplatePicker setSelectedTemplate={setSelectedTemplate} />

        {projectName && selectedTemplate && (
          <div className="text-center mt-4">
            
            <button className="btn btn-primary" onClick={handleStart}>
              Iniciemos 🚀
            </button>
          </div>
        )}
        <MyComponent />


        <div className="w-full">
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default Create;