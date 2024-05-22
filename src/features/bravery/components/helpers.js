export const SUMMONERS_RIFT_MAP_ID = 11;
export const JUNGLE_ROLE_CHANCE = 0.2;
export const ABILITY_ARRAY = ["Q", "W", "E", "R"];

export const sortItemData = (oldItemObject, mapId) => {
  const newItemObj = {
    items: getCompletedItemsByMap(oldItemObject, mapId),
    boots: getBootsByMap(oldItemObject, mapId),
    starter: getStarterItemByMap(oldItemObject, mapId),
  };

  return newItemObj;
};

const getCompletedItemsByMap = (oldItemObject, mapId) => {
  const filteredItems = Object.values(oldItemObject).filter(
    (item) => item.maps[mapId] && isItemEligible(item)
  );
  return filteredItems;
};

const getBootsByMap = (oldItemObject, mapId) => {
  return Object.values(oldItemObject).filter(
    (item) => item.maps[mapId] && item.tags.includes("Boots") && !item.into
  );
};

const getStarterItemByMap = (oldItemObject, mapId) => {
  const starterObject = {};
  starterObject.lane = Object.values(oldItemObject).filter(
    (item) =>
      item.tags.includes("Lane") &&
      !item.requiredChampion &&
      !item.tags.includes("Consumable") &&
      !item.tags.includes("Jungle") &&
      !item.tags.includes("GoldPer") &&
      item.maps[mapId]
  );
  starterObject.jungle = Object.values(oldItemObject).filter(
    (item) =>
      item.tags.includes("Jungle") && item.tags.length === 1 && item.maps[mapId]
  );
  starterObject.support = Object.values(oldItemObject).filter(
    (item) => item.name === "World Atlas"
  );
  return starterObject;
};

const isItemEligible = (item) => {
  if (item.name === "Mejai's Soulstealer") return item;
  return (
    item.gold.total > 2000 &&
    !item.from?.includes("3867") &&
    item.gold.purchasable &&
    !item.requiredAlly &&
    item.name !== "Vigilant Wardstone"
  );
};

const getUniquePassiveNameFromItemDescription = (item) => {
  const regex = /(?<=<passive>).*?(?=<\/passive>)/g;
  const passive = [...new Set(item.description.match(regex))];
  console.log({ passive });
  return passive;
};

export const getUniqueItems = (itemArr) => {
  const itemPassives = [];
  const uniqueItemsWithoutDuplicatePassives = itemArr.map((item) => {
    const passives = getUniquePassiveNameFromItemDescription(item);
    if (itemPassives.includes(passives[0])) {
      console.log("exists");
      return item;
    }
    return item;
  });
  console.log("passives", uniqueItemsWithoutDuplicatePassives.flat());
  return itemArr;
};

export const randomUniqueItemsFromArray = ({ itemArray, noBoots = false }) => {
  const shuffled = itemArray.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, noBoots ? 6 : 5);
};
