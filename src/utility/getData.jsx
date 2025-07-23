export const GetData = {
  getTranslations: async () => {
    const response = await fetch(
      "https://bible.helloao.org/api/available_translations.json"
    );
    const data = await response.json();
    return data;
  },
};
