// src/data/cardsData.ts
export interface CardData {
    id: number;
    title: string;
    text: string;
    img: string;
  }
  
  export const cardsData: CardData[] = [
    {
      id: 1,
      title: "Montañas Nevadas",
      text: "Explora la belleza de las montañas cubiertas de nieve.",
      img: "https://picsum.photos/400/200?random=1",
    },
    {
      id: 2,
      title: "Playa Tropical",
      text: "Disfruta del sol y la arena en una playa paradisíaca.",
      img: "https://picsum.photos/400/300?random=2",
    },
    {
      id: 3,
      title: "Bosque Encantado",
      text: "Adéntrate en un bosque mágico y descubre su encanto.",
      img: "https://picsum.photos/400/250?random=3",
    },
    {
      id: 4,
      title: "Ciudad Moderna",
      text: "Vive la experiencia urbana en una ciudad moderna y vibrante.",
      img: "https://picsum.photos/400/300?random=4",
    },
    {
        id: 5,
        title: "Ciudadela",
        text: "Vive la experiencia urbana en una ciudad moderna y vibrante.",
        img: "https://picsum.photos/400/400?random=4",
      },
      
      {
        id: 6,
        title: "Montañas Nevadas",
        text: "Explora la majestuosidad de las montañas cubiertas de nieve.",
        img: "https://picsum.photos/500/600?random=5",
      },
      {
        id: 7,
        title: "Bosque Encantado",
        text: "Adéntrate en un bosque lleno de misterio y magia.",
        img: "https://picsum.photos/400/200?random=6",
      },
      {
        id: 8,
        title: "Playa Paraíso",
        text: "Relájate en la arena dorada y disfruta del sol y el mar.",
        img: "https://picsum.photos/300/350?random=7",
      },
      {
        id: 9,
        title: "Aventura en el Desierto",
        text: "Descubre la belleza del desierto con sus vastas dunas.",
        img: "https://picsum.photos/600/300?random=8",
      },
      {
        id: 10,
        title: "Cascada Esmeralda",
        text: "Déjate sorprender por la fuerza y belleza de la naturaleza.",
        img: "https://picsum.photos/600/400?random=9",
      },
      {
        id: 11,
        title: "Lago Sereno",
        text: "Encuentra paz y tranquilidad en este hermoso lago.",
        img: "https://picsum.photos/600/350?random=10",
      },
    
  ];
  