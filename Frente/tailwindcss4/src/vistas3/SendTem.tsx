import Header from "../Headerr";
import Componente from "./Component";
import Footer from "../components/Footer"
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {FormularioStore} from '../Store/TryZustand';
import { useStore } from "zustand";






const FinishTheme = () => {
  const dialogRef = useRef(null); // 1. Referencia al dialog
 const token = localStorage.getItem("token");
  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal(); // 2. Abre el dialog correctamente
    }
  };

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };
 const templates = useStore(FormularioStore,(state:any) => state.templates )
 const FormData = useStore(FormularioStore,(state) => state.formData)

 const sendBackend  = () => {
  const user = {
    id: 1
  }
  const bodyState = {
    title: FormData.nombre,
    user: user,
    description: FormData.template,
    templates: templates,
  }

  console.log("listooo")
  fetch("http://localhost:3000/transitions/createTra",{
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}` // 2️⃣ Lo envías en el header Authorization
    },
    body: JSON.stringify(bodyState) 
  })
    .then(response => response.json())
    .then(result => console.log("ready papa", result))
    .catch(error => console.error("Error al hacer fetch:", error));
}
  return (
    <div>
      <Header />


      <div className="grid grid-cols-1 mx-[10%] gap-3">

        <div className="flex justify-start items-start m-1 gap-4">

         <Link to="/c-forms">
          <button className="bg-[#1E293B] font-semibold flex justify-start mx-[100px] px-4 py-2 rounded hover:bg-[#7C3AED] duration:100"> Volver a edición </button> 
         
         </Link>         
        </div>
         <p className="m-auto text-[28px] font-semibold flex text-center">
          Revisa antes de enviar
        </p>
        <button
          onClick={openDialog}
          className="m-auto py-2 px-5 rounded bg-[#30be05] font-semibold"
        >
          SEND AND FINISH
        </button>
      </div>

      <div className="grid grid-cols-1">
         <dialog
        ref={dialogRef}
        className="p-6 rounded shadow-lg bg-[#111] text-white w-[90%] max-w-md
                   fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div className="flex justify-center text-center "> 
            <p className="mb-4 text-xl font-semibold"> ¿Estamos listos? guardemos :D</p>

        </div>




        {/* Acá necesito enviarlo al backend */}
        <div className="flex justify-center mb-2 ">
        <button
          type="button"
          onClick={sendBackend}
          className=" bg-[#1daf00] text-white px-4 py-2 rounded text-end"
        >
          Guardar
        </button>
        </div>





        <div className="flex justify-center text-center "> 
            <p className="mb-4 text-xl font-semibold"> ó</p>

        </div>        
        <div className="flex justify-center">
        <button
          type="button"
          onClick={closeDialog}
          className=" bg-red-500 text-white px-4 py-2 rounded text-end"
        >
          Volver
        </button>
        </div>
      </dialog>
      </div>

      <Componente />
      <Footer />
    </div>
  );
};




export default FinishTheme;