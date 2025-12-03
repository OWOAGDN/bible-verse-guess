import { GetData } from "../utility/getData";

export default function TestButton({ selectedTrans }) {
  const translation = selectedTrans;
  const handleClick = async (e) => {
    e.preventDefault();
    const getRandomBook = async () => {
      const response = await fetch(
        `https://bible.helloao.org/api/${translation}/books.json`
      );
      const data = await response.json();
      const randomBook =
        data.books[Math.floor(Math.random() * data.books.length)];
      console.log(randomBook.id);
      let numArray = [];
      const chapterNumbers = randomBook.numberOfChapters;
      for (let i = 1; i <= chapterNumbers; i++) {
        numArray.push(i);
      }

      return {
        book: randomBook.id,
        chapter: numArray[Math.floor(Math.random() * numArray.length)],
      };
    };
    const randomBook = await getRandomBook();
    const { book, chapter } = randomBook;
    const randomChapter = await GetData.getChapters(translation, book, chapter);
    const verses = randomChapter.chapter.content.filter(
      (f) => f.type === "verse"
    );
    const randomVerse = verses[Math.floor(Math.random() * verses.length)];
    console.log(randomVerse.content);
    console.log(book, chapter, randomVerse.number);
  };
  return <button onClick={handleClick}>Press</button>;
}
