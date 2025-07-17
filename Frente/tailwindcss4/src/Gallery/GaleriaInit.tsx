import Header from "../Headerr";
import Footer from "../components/Footer";
import { useState } from "react";
import { filtros } from "../Data/filterConfig"



interface RecursoEducativo {
  titulo: string;
  url: string;
  etiquetas: string[];
  resumen: string;
}

const recursos: RecursoEducativo[] = [
  {
    titulo: "La Revolución Industrial",
    url: "https://picsum.photos/seed/history1/400/300",
    etiquetas: ["historia", "siglo XVIII", "tecnología"],
    resumen: "Explora cómo la Revolución Industrial transformó la economía y la sociedad con la introducción de máquinas y fábricas."
  },
  {
    titulo: "Fundamentos de Álgebra",
    url: "https://picsum.photos/seed/math1/400/300",
    etiquetas: ["matemáticas", "álgebra", "ecuaciones"],
    resumen: "Aprende a resolver ecuaciones lineales y cuadráticas con ejemplos prácticos para estudiantes de secundaria."
  },
  {
    titulo: "El Sistema Solar",
    url: "https://picsum.photos/seed/science1/400/300",
    etiquetas: ["ciencias", "astronomía", "planetas"],
    resumen: "Descubre los planetas, lunas y otros cuerpos celestes que componen nuestro sistema solar en un viaje cósmico."
  },
  {
    titulo: "Literatura del Siglo de Oro",
    url: "https://picsum.photos/seed/literature1/400/300",
    etiquetas: ["literatura", "historia", "español"],
    resumen: "Analiza obras clave de Cervantes y Lope de Vega, pilares de la literatura española del siglo XVII."
  },
  {
    titulo: "Programación Básica con Python",
    url: "https://picsum.photos/seed/coding1/400/300",
    etiquetas: ["tecnología", "programación", "python"],
    resumen: "Iníciate en la programación con Python, aprendiendo estructuras básicas como bucles y funciones."
  },
   {
    titulo: "Programación Básica con Python",
    url: "https://picsum.photos/seed/coding6/400/300",
    etiquetas: ["tecnología", "programación", "python"],
    resumen: "Iníciate en la programación con Python, aprendiendo estructuras básicas como bucles y funciones."
  },
  {
    titulo: "Programación Básica con Python",
    url: "https://picsum.photos/seed/coding3/400/300",
    etiquetas: ["tecnología", "programación", "python"],
    resumen: "Iníciate en la programación con Python, aprendiendo estructuras básicas como bucles y funciones."
  },
  {
    titulo: "Programación Básica con Python",
    url: "https://picsum.photos/seed/coding4/400/300",
    etiquetas: ["tecnología", "programación", "python"],
    resumen: "Iníciate en la programación con Python, aprendiendo estructuras básicas como bucles y funciones."
  }
]



const Card = () =>{
    return(
                            <div className="grid grid-cols-2 lg:grid-cols-3  m-auto ">
            {recursos.map((recurso, index) => (
                                <div key={index} className="grid max-w-[20rem] max-h-[20rem] rounded-2xl grid-rows-5 p-0 m-1  bg-[#111111] border-4 border-[#111111] hover:bg-[#1f1c1c] hover:border-[#1f1c1c] overflow-hidden">
                                                 <img src={recurso.url} loading="lazy" className="row-start-1 row-end-1 w-full h-[10rem] rounded hover:animate-" />
                                            <div className="grid row-start-3 row-end-4 h-[7rem] rounded grid-rows-2 p-2 ">
                                                 <p className="text-[0.9rem] font-semibold px-3 bg-gray-900/40 overflow-hidden whitespace-nowrap text-ellipsis"> {recurso.titulo}   </p>
                                                  
                                <p className="text-xs font-semibold line-clamp-2">{recurso.resumen} ver mas</p>

            
                                             </div>
                                             <div className="grid row-start-4 row-end-5  h-[7rem] rounded grid-rows-2 p-2 " >
                                              <p className="my-5"> etiquetas</p>                                    {/* <p className="text-xs font-semibold line-clamp-2">{recurso.resumen} ver mas</p> */}
                                            <div  className="flex  flex-wrap gap-3 mt-4">
                                      {recurso.etiquetas.map((etiqueta, i) => (
                                              <span key={i} className="p-[2%] py-1   rounded-[12px] text-[0.8rem] text-[#aaaaaa]  flex-wrap"> {etiqueta}</span>
                                           ))
                                          }
                                               </div>  
                                              </div>
                                        </div>
                                        


                                 ))}
        </div>
    )
}


const Filter = () => {
  return (
    <div className="grid grid-cols-1 items-start">
      <div className="grid place-items-center text-center">
        <p className="font-semibold text-[18px]">Filtrar por categoría</p>

        {filtros.map((filtro, index) => (
          <div key={index} className="grid grid-cols-1 my-4 gap-2">
            <p className="font-semibold text-[15px] pt-[10px]">{filtro.categoria}</p>

            {filtro.opciones.map((opcion, i) => (
              <label key={i} className="flex items-center space-x-2 py-2 px-32 lg:px-4 border-[0.5px] hover:bg-[#7C3AED] rounded">
                <input type="checkbox" />
                <span>{opcion}</span>
              </label>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};








const SectGall = () =>{
  const [isOpen, setIsOpen] = useState(false);

    return(
        <div >
            <Header />
            <div className="grid grid-cols-1 g-4">
              <p className="flex m-auto text-[5rem] font-inter justify-center items-center text-center  " style={{fontFamily:'Inter, sans-serif'}}> Busca un nuevo reto </p>
              <input type="text" className=" w-[75%] lg:w-[35%] bg-[#3a3636] border-2 border-[#111111]  p-2 rounded m-auto" onChange={(e)=>{console.log(e.target.value)}} />
            </div>
                            <div className="lg:hidden flex justify-center px-4 py-2">
                            <button
                              onClick={() => setIsOpen(!isOpen)}
                              className="bg-[#334155] text-white px-[4rem] rounded py-2  shadow hover:bg-[#7C3AED]"
                            >
                              {isOpen ? "Cerrar filtros" : "Mostrar filtros"}
                            </button>
                          </div>

                    <div className="lg:grid lg:grid-cols-[15rem_1fr] min-h-[75vh]">
              {/* Aside: visible en grande, desplegable en móvil */}
              <aside
                className={`
                  bg-[#334155] rounded-2xl p-1 m-[3rem] lg:m-[10px]
                  ${isOpen ? 'block' : 'hidden'}
                  lg:block lg:m-2
                `}
              >
                <Filter />
                  </aside>


            <main className="w-full p-5 ">

                        <Card />

            </main>
        </div>
            <Footer />
       </div>

   )
}

export default SectGall;