export type Member = {
  img: string;
  objectPosition: string;
  scale: number;
  name: string;
  title: string;
};

export const members: Member[] = [
  {
    img: "/hoggins.webp",
    objectPosition: "40% -30%",
    scale: 1.7,
    name: "Nikolaj Hoggins",
    title: "Software Engineer @ Bricksite ApS",
  },
  {
    img: "/billgates.webp",
    objectPosition: "40% -50%",
    scale: 1.1,
    name: "Bill Something",
    title: "Dunno? Probably not doing much with his life",
  },
];
