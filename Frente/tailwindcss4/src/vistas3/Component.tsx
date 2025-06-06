import { useEffect } from 'react';
import {FormularioStore} from '../Store/TryZustand';
import {TemplateComponent} from '../Vistas2/Viewcreate';

const FormData = FormularioStore.getState().formData;



const Componente = () => {
const template = FormularioStore().template;
const selectTemplate = FormularioStore()
useEffect(() =>{
   console.log(template.question);

},[])
return(
        //            que pereza y sueño, mañana sigo  

        <div className="grid grid-cols-1">
            <p className="m-auto text-[50px]">  {FormData.nombre}  </p>

            <TemplateComponent/>
            <div className="grid m-auto bg-green-400 w-1/2  rounded p-5 gap-3 mb-5">
        
                <img src={template.imagePreview} className="w-3/4 m-auto rounded" alt="W3Schools.com"  />
                <p className="flex justify-center text-center text-white text-[34px] font-semibold"> {template.question}  </p>
                <p className="flex justify-center text-center text-[26px]" > selecciona tu respuesta </p>
                           {template.answer.map((item, i) => (
                                     item !== "" && (
                                    <button className="..." key={i}>
                                    <span className='p-2 rounded text-[28px] hover:bg-amber-200'>{item}</span>
                                    </button>
                                )
                            ))}
            </div>
        </div>
    )
}

  


export default Componente;