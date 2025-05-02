export interface Formulario{
    nombre: string;
    template: string;
}

export interface Template {
    id: number;
    question: string;
    answer: string[];
    correctAnswer: string;
    imageUrl: string;
    href: string;    
}

export type UpdateTemplate = (id: number, field: string, value: string[]) => void;
