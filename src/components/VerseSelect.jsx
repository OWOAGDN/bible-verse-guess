import { useState } from "react";
import { GetData } from "../utility/getData";

export default function VerseSelect({ getSelectedVerse }) {
  const [verse, setVerse] = useState();
  const [mockVerse, setMockVerse] = useState([
    { number: 1, content: ["Example verse"] },
    { number: 2, content: ["Example verse"] },
  ]);

  const getNumberOfVerses = (chapter) => {
    let array = [];
    for (let i = 1; i <= chapter.length; i++) {
      array.push(i);
    }
    return array;
  };

  const chapter = getNumberOfVerses(mockVerse);
  /*const handleClick = (event) => {
    event.preventDefault();
    GetData.getTranslations()
      .then((data) => data.translations.filter((tr) => tr.language === "eng"))
      .then((english) => console.log(english));
  }; */
  const handleClick = (event) => {
    event.preventDefault();
    GetData.getChapters()
      .then((data) => {
        console.log(data);
        return data.chapter.content.filter((f) => f.type === "verse");
      })
      .then((verses) => {
        console.log(verses);
        const randomVerse = verses[Math.floor(Math.random() * verses.length)];
        console.log(randomVerse.content);
        setVerse(randomVerse.content);
      });
  };
  return (
    <>
      {verse}
      <form>
        <select onChange={getSelectedVerse}>
          {chapter.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
      </form>
    </>
  );
}
