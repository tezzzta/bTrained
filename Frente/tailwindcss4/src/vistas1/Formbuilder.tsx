import  { useState } from "react";
import {TemplatePicker, templates} from "./Forms";

const FormBuilder = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-2xl font-bold mb-4">Selecciona un tipo de formulario</h1>
      
      {!selectedTemplate ? (
        <TemplatePicker onSelect={setSelectedTemplate} />
      ) : (
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold">
            Creando: {templates.find((t) => t.id === selectedTemplate)?.title}
          </h2>
          {/* Aquí puedes renderizar el formulario basado en la plantilla */}
        </div>
      )}
    </div>
  );
};

export default FormBuilder;