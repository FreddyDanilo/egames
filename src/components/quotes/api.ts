export interface QuoteI {
  id: number;
  name: string;
  src: string;
  description: string;
  quote: string;
  game: string;
  game_cover: string;
}

export const QUOTES = [
  {
    id: 1,
    name: "Thiago Silva",
    src: "/quotes/thiago-silva.png",
    description: "PRO Player",
    game: "Valorant",
    game_cover: "/quotes/valorant.png",
    quote:
      "Montamos o Lethal, meu time profissional de Valotant, na comunidade eGames. Muito obrigado por nos proporcionar esse espaço fantástico feito por pessoas incríveis.",
  },
  {
    id: 2,
    name: "Freddy Danilo",
    src: "/quotes/freddy-danilo.png",
    description: "Desenvolvedor Front-end e Youtuber",
    game: "Valorant",
    game_cover: "/quotes/valorant.png",
    quote:
      "Encontrei o eGames por acaso e foi o melhor achado do ano! A comunidade é simplesmente incrível. Agora consigo ficar por dentro de tudo o que acontece no mundo gamer 🤘",
  },
  {
    id: 3,
    name: "Pedro Henrique",
    src: "/quotes/pedro-henrique.png",
    description: "Criador de Conteúdo",
    game: "CS:GO",
    game_cover: "/quotes/csgo.png",
    quote:
      "Estou amando criar conteúdo na comunidade eGames Público é fantástico, parabéns à toda a equipe dessa plataforma incrível!",
  },
];
