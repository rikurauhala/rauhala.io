export const author = {
  name: "Riku Rauhala",
  profession: "Software Developer",
  education: "B.Sc. in Computer Science",
  location: "Helsinki, Finland",
} as const;

export const contact = {
  email: `mailto:${process.env.EMAIL_ADDRESS}`,
  gitHub: "https://github.com/rikurauhala",
  linkedIn: "https://linkedin.com/in/rikurauhala",
} as const;
