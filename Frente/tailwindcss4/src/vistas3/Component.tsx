import { useEffect, useRef, useMemo } from 'react';
import {FormularioStore} from '../Store/TryZustand';
import {ArrowLeft, ArrowRight, Plus} from 'lucide-react' 
import { useStore } from "zustand";
import { random } from 'gsap';

const FormData = FormularioStore.getState().formData;


 const TemplateComponent = () => {
  const templates = useStore(FormularioStore, (state: any) => state.templates); 
  const addTemplate = useStore(FormularioStore, (state: any) => state.addTemplate);
  const incrementTemplateId = useStore(FormularioStore, (state: any) => state.incrementTemplateId);
  const goNext = useStore(FormularioStore, (state: any) => state.goNext);
  const plantilla = useStore(FormularioStore, (state: any) => state.template);
  const idCounter = useStore(FormularioStore, (state: any) => state.idCounter);
  const goPrev = useStore(FormularioStore, (state: any) => state.goPrev);
    const handleF = useRef(false)

  useEffect(() => {

    if(!handleF.current){
    handleF.current = true;      
      if (templates.length === 0) {
      addTemplate();
    }}
  }, []);

  const addHandleClick = () => addTemplate();
  const handleTemp = () => goNext();
  const handlePrev = () => goPrev();

  return (
    <div>
      <div className="flex justify-center gap-x-4 items-center m-9 pb-auto">
        <button 
          onClick={handlePrev}
          className="bg-[#171f2c] text-white p-2 rounded m-[20px] hover:bg-[#2b2f35]"
        >
          <ArrowLeft />
        </button> 

        <p>
          {plantilla.id} / {idCounter}
        </p>

        <button 
          onClick={handleTemp}
          className="bg-[#171f2c] text-white p-2 rounded hover:bg-[#2b2f35]"
        >
          <ArrowRight />
        </button>     

        
      </div>
    </div>
  );
}






const Componente = () => {


const template = FormularioStore().template;
const selectTemplate = FormularioStore()
useEffect(() =>{
   console.log(template.question);

            },[])
            return(

        <div className="grid grid-cols-1">

            <TemplateComponent/>
            <div className="grid m-auto bg-green-400 w-1/2  rounded p-5 gap-3 mb-5">
                        <p className="m-auto text-[50px]">  {FormData.nombre}  </p>

        

        
                     {template.imagePreview !== "W3Schools.com" &&(<img src={template.imagePreview} className="w-3/4 m-auto rounded" alt="W3Schools.com"  />)}   
                                  <p className="flex justify-center text-center text-white text-[34px] font-semibold"> {template.question}  </p>
                <p className="flex justify-center text-center text-[26px]" > selecciona tu respuesta </p>

                
                          {[...template.answer, template.correctAnswer]
                        .filter(Boolean) // elimina vacíos
                        .sort(() => Math.random() - 0.5) // mezcla aleatoriamente
                        .map((item, i) => (
                          <button
                            key={i}
                            className="..."
                            onClick={() => {
                              if (item === template.correctAnswer) {
                                alert("✅ ¡Correcto!");
                              } else {
                                alert("❌ Incorrecto");
                              }
                            }}
                          >
                            <span className="p-2 rounded text-[28px] hover:bg-amber-200">
                              {item}
                            </span>
                          </button>
                      ))}

            </div>
        </div>
    )
}

  


export default Componente;