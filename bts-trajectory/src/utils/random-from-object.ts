export const randomFromObject = (o: object) =>
  Math.floor(Object.keys(o).length * Math.random());
