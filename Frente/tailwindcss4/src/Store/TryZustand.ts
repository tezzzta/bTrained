  import { create } from 'zustand';
  import type { Formulario, Template } from './IntZus.d.ts';

  interface FormularioStore {
    formData: Formulario;
    template: Template;
    templates: Template[]; // nuevo
    setFormData: (key: keyof Formulario, value: string) => void;
    selectTemplate: (id: number) => void;
    addTemplate: () => void; // nuevo
    removeTemplate: (id: number) => void; // nuevo
    idCounter: number;
    incrementTemplateId: () => void;
    goNext: () => void;

    
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

    idCounter: 1,

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
      const id = get().idCounter;
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
        idCounter: id + 1
      }));
    },

    removeTemplate: (id) => {
      const filtered = get().templates.filter((t) => t.id !== id);
      set((state) => ({
        templates: filtered,
        template:
          state.template.id === id && filtered.length > 0
            ? filtered[0]
            : state.template.id !== id
            ? state.template
            : {
                id: 0,
                question: '',
                answer: [],
                correctAnswer: '',
                imageUrl: '',
                href: ''
              }
      }));
    },

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
        const next = actualIndex +1;


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