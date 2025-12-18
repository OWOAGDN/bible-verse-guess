import { HelperFunctions } from "./helperFunctions";

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
  getBooks: async (translation) => {
    const response = await fetch(
      `https://bible.helloao.org/api/${translation}/books.json`
    );
    const data = await response.json();
    return data;
  },
  getRandomBook: async (translation) => {
    const booksData = await GetData.getBooks(translation);
    const randomBook =
      booksData.books[Math.floor(Math.random() * booksData.books.length)];
    console.log(randomBook.id);
    const chapterNumbers = randomBook.numberOfChapters;
    const numArray = HelperFunctions.numberToArray(chapterNumbers);

    return {
      book: randomBook.id,
      chapter: numArray[Math.floor(Math.random() * numArray.length)],
    };
  },
};
