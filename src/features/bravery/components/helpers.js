export const SUMMONERS_RIFT_MAP_ID = 11;

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

// this is a basic function for getting items. In the future we will need to check for edge
// cases like unique item passives (eg: only one of steraks and maw can be purchased).
const isItemEligible = (item) => {
  return (
    item.into?.length <= 1 &&
    item.from &&
    !item.from.includes("3867") &&
    !item.requiredAlly &&
    !(item.tags.includes("Consumable") || item.tags.includes("Boots")) &&
    item.name !== "Leeching Leer"
  );
};

export const abilityArray = ["Q", "W", "E", "R"]

export const sanitizeDescription = (description) => {
  return description.replace(/<[^>]*>/g, '');
}