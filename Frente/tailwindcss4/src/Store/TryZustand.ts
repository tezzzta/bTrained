import { create } from 'zustand'
import type { Formulario } from './IntZus.d.ts'




interface FormularioStore {
  formData: Formulario;
  setFormData: (key: keyof Formulario, value: string) => void;
}

export const FormularioStore = create<FormularioStore>((set) => ({
   
    formData: {
        nombre: ' ',
        template: ''
    },
    setFormData: (key, value) => {
      set((state) => {
        const newState = {
          formData: {
            ...state.formData,
            [key]: value
          }
        };

        //BORRAR LOG DE NUEVO ESTADO AL FINALIZAR APP 
        console.log("Nuevo estado:", newState);  
        return newState;
      });
    }
    
}));