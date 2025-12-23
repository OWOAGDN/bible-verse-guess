import { useEffect } from "react";
import { GetData } from "../utility/getData";
import { HelperFunctions } from "../utility/helperFunctions";

export default function GenerateVerse({ selectedTrans, setRandomVerse }) {
  const translation = selectedTrans;
  const handleClick = async (e) => {
    e.preventDefault();
    const randomBook = await GetData.getRandomBook(translation);
    const { book, chapter } = randomBook;
    const verses = await GetData.getVerses(translation, book, chapter);
    const randomVerse = verses[Math.floor(Math.random() * verses.length)];
    const cleanedVerse = HelperFunctions.cleanVerse(randomVerse.content);
    console.log(randomVerse.content);
    console.log(book, chapter, randomVerse.number);
    setRandomVerse(() => cleanedVerse);
  };
  return <button onClick={handleClick}>Generate a Verse</button>;
}
