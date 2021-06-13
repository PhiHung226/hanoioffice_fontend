
const findIndexItem = (arr, item) => {
  return arr.findIndex((listItem) => listItem === item);
};

const replaceItemAtIndex = (arr, index, newValue) => {
  return [ ...arr.slice(0, index), newValue, ...arr.slice(index + 1) ];
};

export {
  replaceItemAtIndex,
  findIndexItem
};