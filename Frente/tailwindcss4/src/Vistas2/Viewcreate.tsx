import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import Header from "../Headerr";  // Asegúrate de que el nombre del archivo Header sea correcto (Headerr -> Header)
import { FormularioStore } from "../Store/TryZustand"; 
import type {Template,UpdateTemplate } from '../Store/IntZus.d.ts'; // Asegúrate de que la ruta sea correcta
import { ArrowBigDown, ArrowDownLeft, ArrowLeft, ArrowRight,  X , Minus, Plus } from "lucide-react";
import { useStore } from "zustand";
import Footer from "../components/Footer.tsx";
import {Link } from "react-router-dom";





// haremos un componente para que el user pueda agregar templates

export const TemplateComponent = () => {
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
  };
  const handleTemp = () => {
    goNext();

  }
  const handlePrev = () => {
    goPrev();
  }

  return(
    
        <div>

      <div className="flex justify-center  gap-x-4  items-center  h- m-9 pb-auto">

       
       
        
           
          <button 
          onClick={handlePrev}

        className="bg-[#171f2c] text-white p-2 rounded margin-[20px] hover:bg-[#2b2f35]">
           <ArrowLeft/>

          </button> 
          <p >
            {plantilla.id} / {idCounter}

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

// const CLIENT_ID = "67c7cb587dab280"; //cambiar client id y poner en el readmeeeeeeeeeeeeeee

// async function uploadImage(imagePath) {
//   try {
//     const image = fs.readFileSync(imagePath, { encoding: "base64" });

//     const response = await axios.post(
//       "https://api.imgur.com/3/upload",
//       { image },
//       { headers: { Authorization: `Client-ID ${CLIENT_ID}` } }
//     );
//    return response.data.data.link; // Retorna la URL de la imagen


  

// Componente para subir fotos

const PhotoUpload: React.FC<{ id: number }> = ({ id }) => {
  const templates = useStore(FormularioStore, (state) => state.templates);
  const updateTemplate = useStore(FormularioStore, (state) => state.updateTemplate);

const template = templates.find(t => t.id === id);
const [imageBase64, setImageBase64] = useState<string | null>(null);

  // Declaro todos los hooks SIN CONDICIONES
const convertirABase64 = (archivo: File) =>
  new Promise<string>((resolve, reject) => {
    const lector = new FileReader();
    lector.readAsDataURL(archivo);
    lector.onload = () => {
      if (lector.result) {
        const base64 = lector.result.toString().split(',')[1];
        resolve(base64); // solo resuelve, no hagas nada más
      } else {
        reject('No se pudo leer el archivo');
      }
    };
    lector.onerror = (error) => reject(error);
  });


  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'image/*': ['.jpg', '.jpeg', '.png', '.gif'] },
    onDrop: async ([imagen]) => {
      const urlTemporal = URL.createObjectURL(imagen);
      const base64 = await convertirABase64(imagen);
    setImageBase64(base64); 
      if (!template) {
          console.error("template no definido al intentar subir imagen");
          return;
      }
      updateTemplate(template.id, 'imagePreview', urlTemporal);
    },
  });

 

 useEffect(() => {
  if (!imageBase64) return;

  fetch('http://localhost:3000/imgur', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ image: imageBase64 }), 
  })
    .then(res => {
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log('URL de la imagen:', data.url);
      if (data.url) {
        updateTemplate(template.id, 'imagePreview', data.url);
      }
    })
    .catch(error => console.error('Error subiendo la imagen:', error));
}, [imageBase64]);

         // Ahora sí condicionalmente renderizo:
  if (!template || template.id === undefined){
    console.log("Renderizando ViewCreate", template);

    return (
      <div style={{backgroundColor: 'red', height: '100vh', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <h1>Cargando plantilla... 🚀</h1>
      </div>
    );
  }
      

  return (
    <div className="w-full max-w-lg mx-auto mb-4">
      <div
        {...getRootProps()}
        className="border-4 border-dashed border-gray-400 p-6 text-center rounded-lg"
      >
        <input {...getInputProps()} />
        {template.imagePreview ? 
        
        (
          <img
            src={template.imagePreview}
            alt="Imagen subida"
            className="w-full h-64 object-cover rounded-md"
          />
        ) : (
          <p className="text-gray-600">
            Haz clic aquí o arrastra una imagen para subirla
          </p>
        )}
        <p className="text-gray-400 mt-2 text-sm">
          (Puedes subir imágenes JPG, PNG o GIF)
        </p>
      </div>
    </div>
  );
};



//un boton bonito q vi en un repositorio, se agrega un condicional para agregar mas respuestas 
const Button = () => {
const template = useStore(FormularioStore, (state) => state.template);
const updateTemplate = useStore(FormularioStore, (state) => state.updateTemplate);
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
        className="border-2 border-gray-300 bg-gray-500 text-[#ffffff] text-center font-semibold rounded-md p-2 w-2/3 mt-2"
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
  const deleteTemplate = useStore(FormularioStore, (state) => state.deleteTemplate);

  const handleDelete = () => {
    deleteTemplate();
  }
  const { template, templates, updateTemplate } = FormularioStore();
  const nombre = useStore(FormularioStore, (state) => state.formData.nombre);

  const [message, setMessage] = useState('');
  useEffect(() =>{
    fetch('http://localhost:3000/api/req')
    .then((res) => res.json())
    .then((data)=> setMessage(data.message))
  }
)


  return (
    <div className="bg-[#0F172A] min-h-screen w-full overflow-visible mb-5">
      <Header />
      <div className="grid grid-cols-1  gap-4  m-10">
         <p className="flex text-white m-auto p-1 text-[4rem]  rounded  justify-center items-center text-center " style={{ fontFamily: 'Anton, sans-serif' }}> Acá verás el título de tu plantilla  </p>
                  <p className="flex text-white m-auto  text-[1rem] font-semibold justify-center items-center text-center"> Tranqui, también lo puedes cambiar al final  </p>

          <p className="flex text-white m-auto p-2   text-[4rem] font-semibold justify-center items-center text-center border-3  border-[#111] rounded hover:bg-[#131212]"> {nombre} </p>
      </div>

      {/* será que hago este componente en uno y lo importo acá? ya tengo sueño, mañana veo */}
              {/*engloba todod el componente */}
        <p className="flex text-white m-[7%] p-3 text-[2rem] bg-[#7C3AED] rounded font-semibold justify-center items-center text-center lg:m-[35%]"> Empieza a crear </p>

              <div className="m-auto">

                <TemplateComponent/>
              </div>

      <div className="flex justify-center items-center h-full mb-9">
      {/*<div className="absolute -top-6 left-6 px-6 py-1 bg-lime-400 rounded-t-xl rounded-b-none shadow-md z-10 text-black text-sm font-semibold border border-gray-300">
 */}



                          {template != null ? (
                    <div className="bg-[#1E293B] rounded-2xl w-90% min-h-screen justify-center items-center text-center mt-2 mb-5 pt-0 pb-5 overflow-visible lg:w-1/2">
                      {/* <Tabs /> */}
                            <div>

                              {/* falta agregar el onclick para eliminar la plantilla actual */}
                             <X size={20} className="m-2 hover:bg-gray-500 rounded" onClick={handleDelete} />

                              </div>
          
                      <div className="m-4">

                        <PhotoUpload id={template.id} /> 
                       <p className="text-white font-bold text-lg"> Tu Pregunta </p>

                        <input
                          type="text"
                          value={template.question}
                          onChange={(e) => updateTemplate(template.id, 'question', e.target.value)}
                          className="text-[22px] text-[#ffffff]  bg-gray-500 text-center font-semibold rounded-md p-2 w-2/3 mt-1 mb-3"
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
                          className="border-2 border-gray-300 bg-gray-500 text-[#ffffff] text-center font-semibold rounded-md p-2 w-2/3 mt-2"
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
                          className="border-2 border-gray-300 bg-gray-500 text-[#ffffff] text-center font-semibold rounded-md p-2 w-2/3 mt-2"
                          placeholder="Respuesta 2"
                        />
                        <div className="flex justify-center items-center mt-1 p-auto   h-full">
                          <Button />
                        </div>
                      </div>
                    </div>
                  ) : null}

                        
                      

      </div>


                            <div className="flex justify-center items-center m-10">
                            <p className="text-[2rem] bg-[#1E293B] p-3 rounded shadow shadow-[#1E293B]">  ¿Listo? guarda y envía </p>
                              </div>
                          <div className="flex justify-center items-center mb-10">
                            <Link to="/send" className="no-underline">
                            <button className="bg-[#7C3AED] py-2  px-4 rounded text-white font-semibold hover:bg-[#A855F7] transition duration-300"> 
                              <span className="text-[2rem]"> Guardar </span>
                            </button>
                            </Link>
                          </div>
      {/* de acá pa abajo si ya no*/}
      <Footer/>
    </div>
  );
};


//Nota, cambiar colores y agregar un footer
export default ViewCreate;
