import he from "he";

const letters = [
  "&#x72;",
  "&#x69;",
  "&#x6B;",
  "&#x75;",
  "&#x40;",
  "&#x72;",
  "&#x61;",
  "&#x75;",
  "&#x68;",
  "&#x61;",
  "&#x6C;",
  "&#x61;",
  "&#x2E;",
  "&#x69;",
  "&#x6F;",
] as const;

export const author = {
  name: "Riku Rauhala",
  profession: "Software Developer",
  location: "Helsinki, Finland",
} as const;

export const contact = {
  gitHub: "rikurauhala",
  linkedIn: "rikurauhala",
  email: he.decode(letters.join("")),
} as const;
