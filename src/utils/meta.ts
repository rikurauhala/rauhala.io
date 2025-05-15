import { author } from "~/content/info";

export const getTitle = (title?: string) => {
  if (title) {
    return `${title} - ${author.name}`;
  }

  return author.name;
};

export const getDescription = (description?: string) => {
  if (description) {
    return description;
  }

  return `${author.profession} from ${author.location}`;
};
