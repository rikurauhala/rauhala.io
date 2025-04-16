const level = 8 as const;

const getColorVariable = (colorName: string, level: number) => {
  return `var(--${colorName}-${level})`;
};

export const colors = {
  yellow: getColorVariable("yellow", level),
  amber: getColorVariable("amber", level),
  orange: getColorVariable("orange", level),
  tomato: getColorVariable("tomato", level),
  red: getColorVariable("red", level),
  ruby: getColorVariable("ruby", level),
  crimson: getColorVariable("crimson", level),
  pink: getColorVariable("pink", level),
  plum: getColorVariable("plum", level),
  purple: getColorVariable("purple", level),
  violet: getColorVariable("violet", level),
  iris: getColorVariable("iris", level),
  indigo: getColorVariable("indigo", level),
  blue: getColorVariable("blue", level),
  cyan: getColorVariable("cyan", level),
  teal: getColorVariable("teal", level),
  jade: getColorVariable("jade", level),
  green: getColorVariable("green", level),
  grass: getColorVariable("grass", level),
  lime: getColorVariable("lime", level),
  mint: getColorVariable("mint", level),
  sky: getColorVariable("sky", level),
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
