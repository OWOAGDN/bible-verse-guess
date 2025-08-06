export const GetData = {
  getTranslations: async () => {
    const response = await fetch(
      "https://bible.helloao.org/api/available_translations.json"
    );
    const data = await response.json();
    return data;
  },
  getChapters: async (translation, book, chapter) => {
    const response = await fetch(
      `https://bible.helloao.org/api/${translation}/${book}/${chapter}.json`
    );
    const data = await response.json();
    return data;
  },
  getRandomVerse: async () => {},
};
