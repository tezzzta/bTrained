import { useEffect, useRef } from 'react';
import {FormularioStore} from '../Store/TryZustand';
import {ArrowLeft, ArrowRight} from 'lucide-react' 
import { useStore } from "zustand";



 const TemplateComponent = () => {
  const templates = useStore(FormularioStore, (state: any) => state.templates); 
  const addTemplate = useStore(FormularioStore, (state: any) => state.addTemplate);
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

const ButtonToPass = () => {
  const templates = useStore(FormularioStore, (state: any) => state.templates); 
  const addTemplate = useStore(FormularioStore, (state: any) => state.addTemplate);
  const goNext = useStore(FormularioStore, (state: any) => state.goNext);
  const goPrev = useStore(FormularioStore, (state: any) => state.goPrev);
    const handleF = useRef(false)

  useEffect(() => {

    if(!handleF.current){
    handleF.current = true;      
      if (templates.length === 0) {
      addTemplate();
    }}
  }, []);

  // const addHandleClick = () => addTemplate();
  const handleTemp = () => goNext();
  const handlePrev = () => goPrev();

  return (
    <div>
      <div className="flex justify-center gap-x-4 items-center m-9 pb-auto">
        <button 
          onClick={handlePrev}
          className="bg-[#171f2c] text-white p-2 rounded m-[20px] hover:bg-[#2b2f35]"
        >
          <span className="flex items-center gap-2 font-semibold">
        <ArrowLeft />

          BEFORE 
      </span>

        </button> 

        <p>
        </p>

        <button 
          onClick={handleTemp}
          className="bg-[#171f2c] text-white p-2 rounded hover:bg-[#2b2f35]"
        >
          
              <span className="flex items-center gap-2 font-semibold">
                NEXT
                <ArrowRight />
              </span>
        </button>     

        
      </div>
    </div>
  );
}





const Componente = () => {
const FormData = FormularioStore((state:any) => state.formData);


const template = FormularioStore().template;
// const selectTemplate = FormularioStore()
useEffect(() =>{
   console.log(template.question);

            },[])
            return(

        <div className="grid grid-cols-1 mx-[5%] lg:mx-0">

            <TemplateComponent/>
            <div className="grid m-auto bg-[#1E293B] w-full lg:w-1/2   lg:mx-0 rounded  lg:px-[5%] gap-2 mb-5">
                      <p className='text-[22px] font-bold text-center text-[#CBD5E1]'>  Título</p>
                        <p className="text-[38px] font-bold text-center uppercase text-[#8d4bff] pt-1">  {FormData.nombre}  </p>

        

        
                      <div className=' lg:bg-[#334155] p-3 rounded-[20px]'>
                        {template.imagePreview !== "W3Schools.com" &&(<img src={template.imagePreview} className="w-3/4 m-auto rounded flex items-center justify-center" alt="W3Schools.com"  />)}   
                                  <p className="flex justify-center text-center text-[#FFF] text-[34px] font-semibold mt-1"> {template.question}  </p>
                      </div>


                <p className="flex justify-center text-center text-[26px] font-semibold text-[#CBD5E1]" > Selecciona la respuesta correcta  </p>

                
                          {[...template.answer, template.correctAnswer]
                        .filter(Boolean) // elimina vacíos
                        .sort(() => Math.random() - 0.5) // mezcla aleatoriamente
                        .map((item, i) => (
                          <button
                            key={i}
                            className="... m-1"
                            onClick={() => {
                              //momentaneamente estas alertas, ya después si guardamos todo como es
                              if (item === template.correctAnswer) {
                                alert("✅ ¡Correcto!");
                              } else {
                                alert("❌ Incorrecto");
                              }
                            }}
                          >
                            <span className="p-2 rounded text-[28px] bg-[#334155] hover:bg-[#7C3AED] ">
                              {item}
                            </span>
                          </button>
                      ))}
                    <ButtonToPass/>
            </div>
        </div>
    )
}

  


export default Componente;