export const randomObjectProperty = (obj) => {
  var keys = Object.keys(obj);
  return obj[keys[(keys.length * Math.random()) << 0]];
};

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
