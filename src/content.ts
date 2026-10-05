export type Star = {
  name: string;
  origin: string;
  image: string;
  body: string;
};

export type Comparison = {
  title: string;
  meta: string;
  blurb: string;
};

export const lede =
  "Actors, directors, writers, and special effects makeup artists whose careers began with a horror credit, in sit-down interviews, with archive of the films and of the work that followed. Not a hosted tour of the genre.";

export const stars: Star[] = [
  {
    name: "Jamie Lee Curtis",
    origin: "Halloween (1978)",
    image: "/portraits/jamie-lee-curtis.jpg",
    body: "Before True Lies, Freaky Friday, and her Academy Award for Everything Everywhere All at Once, Jamie Lee Curtis made her feature debut as Laurie Strode in John Carpenter’s Halloween.",
  },
  {
    name: "John Travolta",
    origin: "Carrie (1976)",
    image: "/portraits/john-travolta.jpg",
    body: "Before Saturday Night Fever, Grease, and Pulp Fiction, John Travolta made one of his first feature appearances as Billy Nolan in Brian De Palma’s Carrie.",
  },
  {
    name: "Brooke Shields",
    origin: "Alice, Sweet Alice (1976)",
    image: "/portraits/brooke-shields.jpg",
    body: "Before The Blue Lagoon and Endless Love, Brooke Shields appeared in Alfred Sole’s cult horror film Alice, Sweet Alice, also released as Communion.",
  },
  {
    name: "Matthew McConaughey",
    origin: "Texas Chainsaw Massacre: The Next Generation (1994)",
    image: "/portraits/matthew-mcconaughey.jpg",
    body: "Before Interstellar, and his Academy Award winning role portraying Ron Woodroof in Dallas Buyers Club, Matthew McConaughey starred in Texas Chainsaw Massacre: The Next Generation.",
  },
  {
    name: "Paul Rudd",
    origin: "Halloween: The Curse of Michael Myers (1995)",
    image: "/portraits/paul-rudd.jpg",
    body: "Before I Love You, Man, Ant-Man, and Sausage Party, Paul Rudd played Tommy Doyle in Halloween: The Curse of Michael Myers.",
  },
  {
    name: "Renée Zellweger",
    origin: "Texas Chainsaw Massacre: The Next Generation (1994)",
    image: "/portraits/renee-zellweger.jpg",
    body: "Before Jerry Maguire, Bridget Jones’s Diary, an Academy Award nomination for Chicago, Cold Mountain, and her Academy Award for Judy, Renée Zellweger starred alongside Matthew McConaughey in Texas Chainsaw Massacre: The Next Generation.",
  },
  {
    name: "Elizabeth Olsen",
    origin: "Silent House (2011)",
    image: "/portraits/elizabeth-olsen.jpg",
    body: "Before she played Wanda Maximoff, Elizabeth Olsen starred in the thriller Silent House.",
  },
  {
    name: "Demi Moore",
    origin: "Parasite (1982)",
    image: "/portraits/demi-moore.jpg",
    body: "Before Ghost, Indecent Proposal, and G.I. Jane, Demi Moore starred in Parasite — Charles Band’s 1982 science-fiction horror film, not the later, unrelated feature of the same name.",
  },
  {
    name: "Jason Alexander",
    origin: "The Burning (1981)",
    image: "/portraits/jason-alexander.jpg",
    body: "Before he became a household name as George Costanza on Seinfeld, Jason Alexander appeared in the cult slasher The Burning.",
  },
];

export const comparisons: Comparison[] = [
  {
    title: "Eli Roth’s History of Horror",
    meta: "AMC · Three seasons · 2018–2021",
    blurb:
      "A hosted survey of the genre’s cycles, subgenres, and the filmmakers who made them.",
  },
  {
    title: "Cursed Films",
    meta: "Shudder · Two seasons · 2020–2022",
    blurb:
      "Production histories of films shadowed by accident, tragedy, and the stories that outlived the set.",
  },
  {
    title: "Horror Noire: A History of Black Horror",
    meta: "Shudder · 2019",
    blurb: "A documentary history of Black horror, told by the artists who shaped it.",
  },
  {
    title: "The Core",
    meta: "Shudder · Series · 2017",
    blurb:
      "Mickey Keating’s Shudder series on how fear is built — technique, psychology, and the people in the room. Ten episodes, from 2017.",
  },
  {
    title: "Queer for Fear: The History of Queer Horror",
    meta: "Shudder · Miniseries · 2022",
    blurb:
      "A four-part history of queer horror, from the gothic novel to the films that kept that history in plain sight.",
  },
  {
    title: "The 101 Scariest Horror Movie Moments of All Time",
    meta: "Shudder · Miniseries · 2022",
    blurb:
      "A clip-driven survey of the moments audiences still cannot shake, argued by people who make and study the genre.",
  },
];

export const nav = [
  { href: "#overview", index: "01", label: "Overview" },
  { href: "#need", index: "02", label: "Need" },
  { href: "#stars", index: "03", label: "Stars" },
  { href: "#form", index: "04", label: "Form" },
  { href: "#comparison", index: "05", label: "Comparison" },
  { href: "#contact", index: "06", label: "Contact" },
];
