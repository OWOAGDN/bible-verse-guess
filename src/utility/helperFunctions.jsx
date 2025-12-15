export const HelperFunctions = {
  cleanVerse: (verse) => {
    verse.map((v) => {
      if (typeof v === "string") {
        return v;
      }
    });
  },
};
