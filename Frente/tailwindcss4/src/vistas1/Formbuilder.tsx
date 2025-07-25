import { useState, useCallback } from "react";
import { TemplatePicker, templates } from "./Forms";
import { FormularioStore } from "../Store/TryZustand";
import type { Formulario } from "../Store/IntZus.d.ts";

const FormBuilder = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);

  // Traemos setFormData desde Zustand
  const setFormData = FormularioStore((state) => state.setFormData);

  // Manejador para actualizar datos del formulario
  const handleInputChange = useCallback(
    (key: keyof Formulario, value: string) => {
      setFormData(key, value);
    },
    [setFormData]
  );

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-2xl font-bold mb-4">Selecciona un tipo de formulario</h1>

      {!selectedTemplate ? (
        <TemplatePicker setFormData={handleInputChange} onSelect={setSelectedTemplate} />
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
