import { useEffect } from "react";
import { GetData } from "../utility/getData";
import { HelperFunctions } from "../utility/helperFunctions";

export default function GenerateVerse({ selectedTrans, setRandomVerse }) {
  const translation = selectedTrans;
  const handleClick = async (e) => {
    e.preventDefault();
    const randomBook = await GetData.getRandomBook(translation);
    const { book, chapter } = randomBook;
    const randomChapter = await GetData.getChapters(translation, book, chapter);
    const verses = randomChapter.chapter.content.filter(
      (f) => f.type === "verse"
    );
    const randomVerse = verses[Math.floor(Math.random() * verses.length)];
    const cleanedVerse = HelperFunctions.cleanVerse(randomVerse.content);
    console.log(randomVerse.content);
    console.log(book, chapter, randomVerse.number);
    setRandomVerse(() => cleanedVerse);
  };
  return <button onClick={handleClick}>Generate a Verse</button>;
}
