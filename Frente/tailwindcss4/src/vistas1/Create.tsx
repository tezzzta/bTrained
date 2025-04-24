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

          <div className={"flex justify-center items-center h-20 "}>
          {formData.nombre.length > 3 &&    formData.template.length > 0  &&   (<button className={"bg-blue-500 text-white font-semibold rounded-2xl py-2 px-6  hover:bg-blue-600 transition duration-300"}> Click </button>
        )}
          
          </div>
      
                  <MyComponent  formData={formData} />


        <div className="w-full">
          <Footer />
        </div>
      </div>
    </section>
  );
}

export default Create;