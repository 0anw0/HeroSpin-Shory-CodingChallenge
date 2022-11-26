export const getFontSize = (value: string): number => {
  let fontSize: number = 20;
  if (value.length < 19) fontSize = 20;
  else if (value.length >= 20 && value.length < 29) fontSize = 18;
  else if (value.length >= 30 && value.length < 49) fontSize = 14;
  else if (value.length >= 50 && value.length < 89) fontSize = 12;
  else if (value.length >= 90) fontSize = 10;
  else fontSize = 10;

  return fontSize;
};
