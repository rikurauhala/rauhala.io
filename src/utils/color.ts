const getColorVariable = (colorName: string, level: number) => {
  return `var(--${colorName}-${level})`;
};

export const getBorderGradient = () => {
  const crimson = getColorVariable("crimson", 11);
  const indigo = getColorVariable("indigo", 11);
  return `linear-gradient(45deg, ${crimson}, ${indigo})`;
};
