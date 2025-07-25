import { useState } from "react";
import { GetData } from "../utility/getData";

export default function VerseSelect() {
  const [verse, setVerse] = useState();
  /*const handleClick = (event) => {
    event.preventDefault();
    GetData.getTranslations()
      .then((data) => data.translations.filter((tr) => tr.language === "eng"))
      .then((english) => console.log(english));
  }; */
  const handleClick = (event) => {
    event.preventDefault();
    GetData.getChapters()
      .then((data) => data.chapter.content.filter((f) => f.type === "verse"))
      .then((verses) => {
        const randomVerse = verses[Math.floor(Math.random() * verses.length)];
        console.log(randomVerse.content);
        setVerse(randomVerse.content);
      });
  };
  return (
    <>
      {verse}
      <form>
        <button onClick={handleClick}>Translations Here</button>
      </form>
    </>
  );
}
