const level = 8 as const;

const getColorVariable = (colorName: string, level: number) => {
  return `var(--${colorName}-${level})`;
};

export const colors = {
  blue: getColorVariable("blue", level),
  indigo: getColorVariable("indigo", level),
} as const;

const gradients = [[colors.indigo, colors.blue]] as const;

export const getBackgroundGradient = (index: number): string => {
  const [color1, color2] = gradients[index % gradients.length];
  return `linear-gradient(90deg, ${color1}, ${color2})`;
};

export const getBorderGradient = () => {
  const crimson = getColorVariable("crimson", 11);
  const blue = getColorVariable("blue", 11);
  return `linear-gradient(45deg, ${crimson}, ${blue})`;
};
