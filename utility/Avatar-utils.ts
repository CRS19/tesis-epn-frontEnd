export const getNameInitials = (fullName: string = "") => {
  const allNames = fullName.trim().split(" ");
  const lastNameIndex = allNames.length > 2 ? 2 : 1;

  const initials = allNames.reduce((acc, curr, index) => {
    if (index === 0 || index === lastNameIndex) {
      acc = `${acc}${curr.charAt(0).toUpperCase()}`;
    }
    return acc;
  }, "");
  return initials;
};

export const getFontsSizesByWidth = (width: number) => {
  console.log(width, " -> ", Math.trunc(0.0086 * width + 20));

  return Math.trunc(0.0186 * width);
};

export const rainbowGenerate = (numOfSteps: number, step: number) => {
  var r: number, g: number, b: number;
  var h = step / numOfSteps;
  var i = ~~(h * 6);
  var f = h * 6 - i;
  var q = 1 - f;
  switch (i % 6) {
    case 0:
      r = 1;
      g = f;
      b = 0;
      break;
    case 1:
      r = q;
      g = 1;
      b = 0;
      break;
    case 2:
      r = 0;
      g = 1;
      b = f;
      break;
    case 3:
      r = 0;
      g = q;
      b = 1;
      break;
    case 4:
      r = f;
      g = 0;
      b = 1;
      break;
    case 5:
      r = 1;
      g = 0;
      b = q;
      break;
  }
  var c =
    "#" +
    ("00" + (~~(r! * 255)).toString(16)).slice(-2) +
    ("00" + (~~(g! * 255)).toString(16)).slice(-2) +
    ("00" + (~~(b! * 255)).toString(16)).slice(-2);
  return c;
};

// TODO: unused
export const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
