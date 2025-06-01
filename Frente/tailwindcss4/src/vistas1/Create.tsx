import { useCallback, useState } from "react";
import Header from '../Headerr';
import Footer from '../components/Footer';
import Card from './CardOne';
import styles from "./principal.module.css";
// import {TemplatePicker} from './Forms';
import MyComponent from "../Anim/FirstSrping";
import {Forma} from './Forms';
//importamos desde el store de zustand
import { FormularioStore } from "../Store/TryZustand";
import type { Formulario} from "../Store/IntZus.d.ts";

import { Link } from "react-router-dom";





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
        <div className="grid grid-cols-1  gap-4 p-4"> 
                  <p className="m-auto text-[3rem] " style={{ fontFamily: 'Anton, sans-serif' }} > Pongamosle un nombre a tu nueva creación</p>

        </div>
          <div className={styles.cardContainer}>
              <Card nombre={formData.nombre} setFormData={handleInputChange} />

        </div>
                   <div className="grid grid-cols-1  mt-3 gap-4 p-4"> 
                              <p className="flex m-auto text-[2rem] justify-center items-center text-center"  style={{ fontFamily: 'Anton, sans-serif' }} > Elige una plantilla para iniciar </p>

                    </div>
          <Forma setFormData={handleInputChange} />

        

        {/* pondremos una redireccion a otra vista con el ESTADO  */}
        <Link to="/c-forms">
          <div className={"flex justify-center items-center h-20 "}>
          {formData.nombre.length > 3 &&    formData.template.length > 0  &&   (<button className={"bg-[#393E46] text-white font-semibold rounded py-2 px-6  hover:bg-[#213448] transition duration-300"}> Empecemos </button>
        )}
          </div>
          </Link> 

      
                  {/* <MyComponent  formData={formData} /> */}


        <div className="w-full">
          <Footer />
        </div>
      </div>
    </section>
  );
}

export default Create;