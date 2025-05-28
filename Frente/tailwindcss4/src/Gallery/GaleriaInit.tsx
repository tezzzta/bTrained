import Header from "../Headerr";
import Footer from "../components/Footer";



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
                            <div className="grid grid-cols-4 gap-4 m-auto ">
            {recursos.map((recurso, index) => (
                                <div key={index} className="grid h-[15rem] w-[18rem]  rounded-2xl grid-rows-5 p-0 m-1  bg-[#111111] border-4 border-[#111111] hover:bg-[#1f1c1c] hover:border-[#1f1c1c] ">
                                                 <img src={recurso.url} loading="lazy" className="row-start-1 row-end-1 w-full h-[8.5rem] rounded hover:animate-" />
                                            <div className="grid row-start-4 row-end-4 h-[7rem] rounded grid-rows-2 p-2 ">
                                                 <p className=" text-[0.9rem] font-semibold">  {recurso.titulo}   </p>
                                                  <p className="text-xs font-semibold line-clamp-2">{recurso.resumen} ver mas</p>
                                             </div>
                                        </div>
                                        


                                 ))}
        </div>
    )
}



const Filter = () => {
  return(
    <div className="flex justify-items-start items-start flex-col ">
      <p className="font-semibold text-[18px]"> Es más fácil filtrar</p>        
      <p className="font-semibold text-[15px]"> Filtra por gustos</p>
        <label className="flex items-center space-x-2">
          <input type="checkbox" />
          <span>Hola 1</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" />
          <span>Hola 2</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" />
          <span>Hola 3</span>
        </label>

      <p className="font-semibold text-[15px] pt-[20px]"> Filtra por gustos</p>
      <label className="flex items-center space-x-2">
          <input type="checkbox" />
          <span>Hola 1</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" />
          <span>Hola 2</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" />
          <span>Hola 3</span>
        </label>
      <p className="font-semibold text-[15px] pt-[20px]"> Filtra por gustos</p>
      <label className="flex items-center space-x-2">
          <input type="checkbox" />
          <span>Hola 1</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" />
          <span>Hola 2</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" />
          <span>Hola 3</span>
        </label>
      <p className="font-semibold text-[15px] pt-[20px]"> Filtra por gustos</p>
      <label className="flex items-center space-x-2">
          <input type="checkbox" />
          <span>Hola 1</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" />
          <span>Hola 2</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" />
          <span>Hola 3</span>
        </label>
 
    </div>
  )
}






const SectGall = () =>{
    return(
        <div >
            <Header />

            <div className="flex items-center justify-center m-auto">
                <input type="text" placeholder="Search..." className="w-[65%] p-2 border border-gray-300 rounded-lg" />
            </div>

            <div className="grid grid-cols-[15rem_1fr] min-h-[75vh]">
                 <aside className="bg-amber-500 rounded-2xl p-4 m-2">

                        <Filter />
                 </aside>



            <main className="w-full p-5">

                        <Card />

            </main>
        </div>
            <Footer />
       </div>

   )
}

export default SectGall;