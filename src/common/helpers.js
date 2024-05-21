export const randomObjectProperty = (obj) => {
  var keys = Object.keys(obj);
  return obj[keys[(keys.length * Math.random()) << 0]];
};

export const randomUniqueItemsFromArray = (arr, numItems) => {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numItems);
};

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
