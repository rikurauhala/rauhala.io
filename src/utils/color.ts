const getColorVariable = (colorName: string, level: number) => {
  return `var(--${colorName}-${level})`;
};

export const getBorderGradient = () => {
  const crimson = getColorVariable("crimson", 11);
  const blue = getColorVariable("blue", 11);
  return `linear-gradient(45deg, ${crimson}, ${blue})`;
};
