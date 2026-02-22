export const formatDate = (date: string): string => {
  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return formattedDate;
};

export const formatMonthYear = (date: string): string => {
  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  });
  return formattedDate;
};
