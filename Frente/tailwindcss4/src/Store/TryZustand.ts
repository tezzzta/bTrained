  import { create } from 'zustand';
  import type { Formulario, Template } from './IntZus.d.ts';

  interface FormularioStore {
    formData: Formulario;
    template: Template;
    templates: Template[]; // nuevo
    setFormData: (key: keyof Formulario, value: string) => void;
    selectTemplate: (id: number) => void;
    addTemplate: () => void; // nuevo
    idCounter: number;
    incrementTemplateId: () => void;
    goNext: () => void;
    deleteTemplate:() => void;

    
  }

  export const FormularioStore = create<FormularioStore>((set, get) => ({
    formData: {
      nombre: '',
      template: ''
    },
    template: {
      id: 0,
      question: '',
      answer: [],
      correctAnswer: '',
      imageUrl: '',
      href: ''
    },
    templates: [],

    idCounter: 0,

    setFormData: (key, value) => {
      set((state) => ({
        formData: {
          ...state.formData,
          [key]: value
        }
      }));
    },

    selectTemplate: (id) => {
      const selected = get().templates.find(t => t.id === id);
      if (selected) {
        set({ template: selected });
      }
    },

    addTemplate: () => {
      const id = get().idCounter +1;
      const newTemplate: Template = {
        id,
        question: '',
        answer: [],
        correctAnswer: '',
        imageUrl: '',
        href: ''
      };
      set((state) => ({ 
        templates: [...state.templates, newTemplate],
        template: newTemplate, // también lo seleccionamos
        idCounter: id
      }));
    },


   deleteTemplate: () => {
            const state = get();
            const currentId = state.template.id;
            const templates = state.templates;

            // Encontrar el índice de la plantilla actual
            const currentIndex = templates.findIndex(t => t.id === currentId);

            // Filtrar la plantilla eliminada
            const updatedTemplates = templates.filter(t => t.id !== currentId);

            // Reindexar los IDs
            const reindexedTemplates = updatedTemplates.map((t, idx) => ({
              ...t,
              id: idx
            }));

            // Seleccionar la plantilla siguiente (o vacía si no hay)
            let nextTemplate: Template;
            if (reindexedTemplates.length === 0) {
              // Caso: no hay plantillas restantes
              nextTemplate = {
                id: 0,
                question: '',
                answer: [],
                correctAnswer: '',
                imageUrl: '',
                href: ''
              };
            } else {
              // Seleccionar la plantilla en el índice siguiente (o la última si no hay siguiente)
              const nextIndex = Math.min(currentIndex, reindexedTemplates.length - 1);
              nextTemplate = reindexedTemplates[nextIndex] || reindexedTemplates[0];
            }

            set({
              templates: reindexedTemplates,
              template: nextTemplate,
              idCounter: reindexedTemplates.length -1
            });
}

,
    
    incrementTemplateId: () => {
      set((state) => ({
        idCounter: state.idCounter + 1
      }));
    },
    updateTemplate: (id: number, key: keyof Template, value: string) => {
      set((state) => ({
        templates: state.templates.map((t) =>
          t.id === id ? { ...t, [key]: value } : t
        ),
        template:
          state.template.id === id
            ? { ...state.template, [key]: value }
            : state.template
      }));
    },
  // necesito hacer dos funciones para la pregunta siguiente y la anterior 
      goNext: () => {
        const state = get();
        const actualIndex = state.template.id
        const next = actualIndex + 1;


        if (next <= state.idCounter) {
          const nextTemplate = state.templates.find(t => t.id === next);
          console.log(next)
          if (nextTemplate) {
            set({ template: {...nextTemplate} });
          return nextTemplate.id;
            
          }
        }
      },
      goPrev: () => {
        const state = get();
        const actualIndex = state.template.id
        const next = actualIndex -1;


        if (next > 0) {
          const nextTemplate = state.templates.find(t => t.id === next);
          console.log(next)
          if (nextTemplate) {
            set({ template: {...nextTemplate} });
          return nextTemplate.id;
            
          }
        }
      }
    
  }));