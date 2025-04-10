import { useCallback, useState } from "react";
import Header from '../Headerr';
import Footer from '../components/Footer';
// import CardTwo from './CardTwo';
import Card from './CardOne';
import styles from "./principal.module.css";
import {TemplatePicker} from './Forms';
import MyComponent from "../Anim/FirstSrping";




const Create = () => {
 



// HAREMOS EL ESTADO ANTES DE ENVIAR AL BACKEND
interface FormData {
  [key: string]: string; 
}

const [formData, setFormData] = useState<FormData>({
  nombre: '',
  template: '',
})


interface TemplatePickerProps {
  setFormData: (key: "nombre" | "template", value: string) => void;
}

const handleInputChange = useCallback(
  (key: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  },
  [setFormData]
);





  return (
    <section className={styles.micolorsection}>
      <div className="w-full">
        <Header />
        <div className={styles.cardContainer}>
          <Card setFormData={handleInputChange} />
        </div>

        <TemplatePicker setFormData={handleInputChange} />



      
                  <MyComponent formData={formData}/>


        <div className="w-full">
          <Footer />
        </div>
      </div>
    </section>
  );
}

export default Create;