export const GetData = {
  getTranslations: async () => {
    const response = await fetch(
      "https://bible.helloao.org/api/available_translations.json"
    );
    const data = await response.json();
    return data;
  },
  getChapters: async () => {
    let translation = "BSB";
    let book = "GEN";
    let chapter = 1;
    const response = await fetch(
      `https://bible.helloao.org/api/${translation}/${book}/${chapter}.json`
    );
    const data = await response.json();
    return data;
  },
};
