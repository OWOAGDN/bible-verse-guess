export const HelperFunctions = {
  cleanVerse: (verse) => {
    return verse
      .map((item) => {
        if (typeof item === "string") {
          return item;
        }
        if (item && typeof item === "object" && "text" in item) {
          return item.text;
        }
        return null;
      })
      .filter(Boolean);
  },
  numberToArray: (number) => {
    let numArray = [];
    for (let i = 1; i <= number; i++) {
      numArray.push(i);
    }
    return numArray;
  },
};
