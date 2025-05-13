import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import Header from "../Headerr";  // Asegúrate de que el nombre del archivo Header sea correcto (Headerr -> Header)
import { FormularioStore } from "../Store/TryZustand"; 
import type {Template,UpdateTemplate } from '../Store/IntZus.d.ts'; // Asegúrate de que la ruta sea correcta
import { ArrowBigDown, ArrowDownLeft, ArrowLeft, ArrowRight,  X , Minus, Plus } from "lucide-react";
import { useStore } from "zustand";



 // Obtiene el id del template actual


// haremos un componente para que el user pueda agregar templates

const TemplateComponent = () => {
  const templates = useStore(FormularioStore, (state) => state.templates); 
  const addTemplate = useStore(FormularioStore, (state) => state.addTemplate);
  const incrementTemplateId = useStore(FormularioStore, (state) => state.incrementTemplateId);
  const goNext = useStore(FormularioStore, (state) => state.goNext);
  const plantilla = useStore(FormularioStore, (state) => state.template);
  const idCounter = useStore(FormularioStore, (state) => state.idCounter);
  const goPrev = useStore(FormularioStore, (state) => state.goPrev);
  
  useEffect(() => {
    if (templates.length === 0) {
      addTemplate();
    } 
  }, []); 

  const addHandleClick = () => {
    addTemplate();
    console.log('RENDER COMPONENTE')
  };
  const handleTemp = () => {
    goNext();
    console.log('RENDER COMPONENTE')

  }
  const handlePrev = () => {
    goPrev();
    console.log('RENDER COMPONENTE')
  }

  return(
    
        <div>

      <div className="flex justify-center  gap-x-4  items-center  h- mb-9">

       
       
        
           
          <button 
          onClick={handlePrev}

        className="bg-[#171f2c] text-white p-2 rounded margin-[20px] hover:bg-[#2b2f35]">
           <ArrowLeft/>

          </button> 
          <p >
            {plantilla.id}

          </p>
          
           
          <button className="bg-[#171f2c] text-white p-2 rounded   hover:bg-[#2b2f35]">
                <ArrowRight onClick={handleTemp}/>

          </button>     
            <button 
            onClick={addHandleClick}
            className="bg-[#171f2c] text-white p-2 rounded hover:bg-[#2b2f35]">
                  <Plus/>
            </button>
      </div>
       
        </div>


    )
}

// haré un ejemplo de barra de pestañas
//debo hacerlo responsivo, pero no tengo idea de como hacerlo, así que lo haré después
// const Tabs = () => {
//   const {
//     templates,
//     template,
//     addTemplate,
//     removeTemplate,
//     selectTemplate
//   } = FormularioStore();

//   return (
//     <div className="flex space-x-2 bg-[#1A2332] ">
//       {templates.map((tab) => (
//         <div
//           key={tab.id}
//           className={`relative px-4 py-1 rounded-t-md border border-gray-300 text-white text-sm font-semibold cursor-pointer
//             ${template.id === tab.id ? 'bg-lime-400 text-black' : 'bg-gray-700'}`}
//           onClick={() => selectTemplate(tab.id)}



          
//         >
//           {tab.id}
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               removeTemplate(tab.id);
//             }}
//             className="absolute -top-1 -right-1 text-white rounded-full w-5 h-4 text-xs flex items-center justify-center"
//           >
//             ×
//           </button>
//         </div>
//       ))}
// {/* 
//       <button
//         onClick={addTemplate}
//         className="bg-blue-500 text-white px-3 rounded-md hover:bg-blue-600 text-sm"
//       >
//         +
//       </button> */}
//     </div>
//   );
// };

// Componente para subir fotos
const PhotoUpload: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const acceptTypes = ['image/jpeg', 'image/png', 'image/gif'];  // Definimos los tipos de archivos permitidos

  const { getRootProps, getInputProps } = useDropzone({
    accept: acceptTypes,  //  no entiendo pq sale error, pero no importa
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles);
      const previews = acceptedFiles.map((file) => URL.createObjectURL(file));
      setImagePreviews(previews);
    },
  });

  return (
    <div className="w-full max-w-lg mx-auto mb-2">
      <div
        {...getRootProps()}
        className="border-4 border-dashed border-gray-400 p-8 text-center rounded-lg relative"
      >
        <input {...getInputProps()} />
        
        {/* si ya la subio, se muestra, sino, pues no se muestra */}
        {imagePreviews.length > 0 ? (
          <img
            src={imagePreviews[0]} // vista 
            alt="Preview"
            className="object-cover w-screen h-full rounded-md" // la idea es que ocupe la mitad del área... 
          />
        ) : (
          <p className="text-gray-600">
            Arrastra y suelta tus imágenes aquí, o haz clic para elegir
          </p>
        )}
        
        {/* Texto secundario */}
        <p className="text-gray-400 mt-2">(Solo imágenes JPG, PNG y GIF)</p>
      </div>
    </div>
  );
};




//un boton bonito q vi en un repositorio, se agrega un condicional para agregar mas respuestas 
const Button = () => {
  const { template, updateTemplate } = FormularioStore();
  const [conta,setConta] = useState(0) 
  return (
    <div className="w-full">
          
          <div>
  {conta > 0 && (
    Array.from({ length: conta }).map((_, index) => (
      <input
        key={index}
        type="text"
        value={template.answer[index +2] || ''}
        className="border-2 border-gray-300 text-[#ffffff] text-center font-semibold rounded-md p-2 w-2/3 mt-2"
        placeholder={`Respuesta ${index + 3}`}
        onChange={(e) => {
          const updated = [...template.answer];
          updated[index + 2] = e.target.value;
          updateTemplate(template.id, 'answer', updated);
        }}
      />
    ))
  )}

  {conta < 3 && (
    <div>
      <button
      title="Add New"
      className="group cursor-pointer outline-none hover:rotate-90 duration-300"
      onClick={() => setConta(conta + 1)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50px"
        height="50px"
        viewBox="0 0 24 24"
        className="stroke-zinc-400 fill-none group-hover:fill-zinc-800 group-active:stroke-zinc-200 group-active:fill-zinc-600 group-active:duration-0 duration-300"
      >
        <path
          d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
          strokeWidth="1.5"
        />
        <path d="M8 12H16" strokeWidth="1.5" />
        <path d="M12 16V8" strokeWidth="1.5" />
      </svg>
    </button>
    </div>
  )}
</div>

    </div>

  );
};

//exportaciooonnnnn


// Componente ViewCreate
const ViewCreate = () => {
  const { template, templates, updateTemplate } = FormularioStore();
  const nombre = useStore(FormularioStore, (state) => state.formData.nombre);
  return (
    <div className="bg-[#1A2332] h-screen w-full overflow-visible mb-5">
      <Header />
      <div className="flex justify-center items-center h-20 ">

          <h1 className="text-white pb-1"> {nombre} </h1>
      </div>

      {/* será que hago este componente en uno y lo importo acá? ya tengo sueño, mañana veo */}
              {/*engloba todod el componente */}
              <TemplateComponent/>

      <div className="flex justify-center items-center h-full mb-9">
      {/*<div className="absolute -top-6 left-6 px-6 py-1 bg-lime-400 rounded-t-xl rounded-b-none shadow-md z-10 text-black text-sm font-semibold border border-gray-300">
 */}

        {/*revisar, solo guarda las primeras dos preguntas, las demas tambien se comparten*/}


                          {template != null ? (
                    <div className="bg-[#393E46] rounded-2xl w-1/2 max-h-full justify-center items-center text-center mt-2 mb-9 pt-0 pb-5 overflow-visible">
                      {/* <Tabs /> */}
                            <div>
                             <X size={20} className="m-2 hover:bg-gray-500 rounded" />

                              </div>
          
                      <div className="mt-6">

                        <PhotoUpload /> 
                       <p className="text-white font-bold text-lg"> Tu Pregunta </p>

                        <input
                          type="text"
                          value={template.question}
                          onChange={(e) => updateTemplate(template.id, 'question', e.target.value)}
                          className="text-[22px] text-[#ffffff] text-center font-semibold rounded-md p-2 w-2/3 mt-1 mb-3"
                          placeholder="Agrega la pregunta"
                        />
                      </div>
                      <div className="mb-5">
                        <p className="text-white font-bold text-lg">Respuestas</p>
                        <input
                          type="text"
                          value={template.answer[0] || ''}
                          onChange={(e) => {
                            const updated = [...template.answer];
                            updated[0] = e.target.value;
                            updateTemplate(template.id, 'answer', updated);
                          }}
                          className="border-2 border-gray-300 text-[#ffffff] text-center font-semibold rounded-md p-2 w-2/3 mt-2"
                          placeholder="Respuesta 1"
                        />
                        <input
                          type="text"
                          value={template.answer[1] || ''}
                          onChange={(e) => {
                            const updated = [...template.answer];
                            updated[1] = e.target.value;
                            updateTemplate(template.id, 'answer', updated);
                          }}
                          className="border-2 border-gray-300 text-[#ffffff] text-center font-semibold rounded-md p-2 w-2/3 mt-2"
                          placeholder="Respuesta 2"
                        />
                        <div className="flex justify-center items-center mt-1 pb-16 h-full">
                          <Button />
                        </div>
                        <p className="text-white font-bold mt-5">Acá las respuestas, serían mínimo 2 máximo 5, AGREGA DIVISORES</p>
                      </div>
                    </div>
                  ) : null}

                        
                      

      </div>



      {/* de acá pa abajo si ya no*/}
      <h1 className="text-white justify-center text-center"> vamos a ver </h1>
    </div>
  );
};


//Nota, cambiar colores y agregar un footer
export default ViewCreate;
