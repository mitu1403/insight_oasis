const getStoredData = (itemName) => {
  let storedData;
  if (itemName === "bookmark") {
    storedData = localStorage.getItem("bookmark");
  } else {
    storedData = localStorage.getItem("spentTime");
  }
  console.log(storedData);
  if (storedData) {
    return JSON.parse(storedData);
  }
  return [];
};

const saveBookmarktoLocalStorage = (data) => {
  localStorage.setItem("bookmark", JSON.stringify(data));
};
const saveSpentTimetoLocalStorage = (data) => {
  localStorage.setItem("spentTime", JSON.stringify(data));
};

const addToLocalStorage = (id, itemName) => {
  if (itemName === "bookmark") {
    const data = getStoredData(itemName);
    data.push(id);
    saveBookmarktoLocalStorage(data);
  } else {
    let data = getStoredData(itemName);
    data = Number(data) + Number(id);
    saveSpentTimetoLocalStorage(data);
  }
};

const removeFromLocalStorage = (id) => {
  const data = getStoredData("bookmark");
  const remainingBookmarkItems = data.filter(item => item !== id)
  saveBookmarktoLocalStorage(remainingBookmarkItems);
};

export { getStoredData, addToLocalStorage, saveBookmarktoLocalStorage, removeFromLocalStorage };
