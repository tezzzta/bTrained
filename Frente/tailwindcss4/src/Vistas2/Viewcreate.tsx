import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import Header from "../Headerr";  // Asegúrate de que el nombre del archivo Header sea correcto (Headerr -> Header)

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
  const [conta,setConta] = useState(0) 
  return (
    <div className="w-full">
          
          <div>
  {conta > 0 && (
    Array.from({ length: conta }).map((_, index) => (
      <input
        key={index}
        type="text"
        className="border-2 border-gray-300 text-[#000000] text-center font-semibold rounded-md p-2 w-2/3 mt-2"
        placeholder={`Respuesta ${index + 3}`}
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
  return (
    <div className="bg-[#1A2332] h-screen w-full overflow-visible mb-5">
      <Header />
      <div className="flex justify-center items-center h-20 ">

          <h1 className="text-white pb-1"> Titulo </h1>
      </div>

      {/* será que hago este componente en uno y lo importo acá? ya tengo sueño, mañana veo */}
      <div className="flex justify-center items-center h-full mb-9">
        {/*vemos donde va el mb-9 */}
        <div className="bg-amber-100 w-1/2 max-h-full justify-center items-center text-center mt-2 mb-9  pt-4 pb-5 rounded-md overflow-visible">
          <PhotoUpload />
          <input
            type="text"
            className="text-[22px] text-[#000000] text-center font-semibold rounded-md p-2 w-2/3 mt-1 mb-3"
            placeholder="Agrega la pregunta "
          />

          <div className="mb-5">
            <p className="text-black font-bold text-lg"> Respuestas</p>
            <input
              type="text"
              className="border-2 border-gray-300 text-[#000000] text-center font-semibold rounded-md p-2 w-2/3 mt-2"
              placeholder="Respuesta "
            />
            <input
              type="text"
              className="border-2 border-gray-300 text-[#000000] text-center font-semibold rounded-md p-2 w-2/3 mt-2"
              placeholder="Respuesta 2"
            />
            
            <div className="flex justify-center items-center mt-1 pb-16 h-full">
              <Button />
            </div>

            <p className="text-black font-bold mt-5">
              Acá las respuestas, serían mínimo 2 máximo 5, AGREGA DIVISORES
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-white justify-center text-center"> vamos a ver</h1>
    </div>
  );
};


//Nota, cambiar colores y agregar un footer
export default ViewCreate;
