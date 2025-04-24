import { useCallback, useState } from "react";
import Header from '../Headerr';
import Footer from '../components/Footer';
// import CardTwo from './CardTwo';
import Card from './CardOne';
import styles from "./principal.module.css";
import {TemplatePicker} from './Forms';
import MyComponent from "../Anim/FirstSrping";

//importamos desde el store de zustand
import { FormularioStore } from "../Store/TryZustand";
import type { Formulario} from "../Store/IntZus.d.ts";






const Create = () => {
 



// HAREMOS EL ESTADO ANTES DE ENVIAR AL BACKEND, SE USA ZUSTAND, ANTES DE ENVIAR AL BACKEND SE ALMACENA 


//ensayo dezustand 
const setFormData = FormularioStore((state) => state.setFormData);
console.log(setFormData);
const formData = FormularioStore((state) => state.formData);

//fin ZUSTAND DECLARATION



// const [formData, setFormData] = useState<FormData>({
//   nombre: '',
//   template: '',
// })


// interface TemplatePickerProps {
//   setFormData: (key: "nombre" | "template", value: string) => void;
// } 
// Lo anterior se usaba como un useState, pero ahora se usa el store de zustand


const handleInputChange = useCallback(
  (key: keyof Formulario, value: string) => {
    setFormData(key, value);
  },
  [setFormData]
);





  return (
    <section className={styles.micolorsection}>
      <div className="w-full">
        <Header />
        <div className={styles.cardContainer}>
        <Card nombre={formData.nombre} setFormData={handleInputChange} />

        </div>

        <TemplatePicker setFormData={handleInputChange} />


      
                  <MyComponent  formData={formData} />


        <div className="w-full">
          <Footer />
        </div>
      </div>
    </section>
  );
}

export default Create;