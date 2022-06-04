export const aphabethLetters = (text: string, i: number) =>
  text[i] < " " ||
  (text[i] > " " && text[i] < "A") ||
  (text[i] > "Z" && text[i] < "a") ||
  (text[i] > "z" && text[i] < "´") ||
  (text[i] > "´" && text[i] < "Á") ||
  (text[i] > "Á" && text[i] < "É") ||
  (text[i] > "É" && text[i] < "Í") ||
  (text[i] > "Í" && text[i] < "Ñ") ||
  (text[i] > "Ñ" && text[i] < "Ó") ||
  (text[i] > "Ó" && text[i] < "Ú") ||
  text[i] > "Ú";

export const accentMarks = (text: string, i: number) =>
  text[i] === "é" ||
  text[i] === "á" ||
  text[i] === "í" ||
  text[i] === "ó" ||
  text[i] === "ú" ||
  text[i] === "ñ";
