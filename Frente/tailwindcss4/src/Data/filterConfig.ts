export interface Filtro{
    categoria:string;
    opciones: string[];
}

export const filtros: Filtro[] = [
     {
    categoria: "Etiquetas",
    opciones: [" historia", " matemáticas", " ciencias", " tecnología"]
  },
  {
    categoria: "Nivel",
    opciones: [" Primaria", " Secundaria", " Universidad"]
  },
  {
    categoria: "Formato",
    opciones: [" Video", " Artículo", " PDF"]
  }
]