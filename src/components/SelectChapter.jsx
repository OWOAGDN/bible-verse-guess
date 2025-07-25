import { useState } from "react";

export default function SelectChapter({ selectedBook, getChapter }) {
  const [chapter, setChapter] = useState([
    {
      name: "Genesis",
      numberOfChapters: 50,
    },
    {
      name: "Exodus",
      numberOfChapters: 6,
    },
    {
      name: "Detueronomy",
      numberOfChapters: 45,
    },
  ]);

  const getNumberOfChapters = (selectedBook) => {
    let numArray = [];
    const [book] = chapter.filter((c) => c.name === selectedBook);
    const chapterNumbers = book.numberOfChapters;
    for (let i = 1; i <= chapterNumbers; i++) {
      numArray.push(i);
    }
    return numArray;
  };

  const chapters = getNumberOfChapters(selectedBook);

  return (
    <>
      <form>
        <select onChange={getChapter}>
          {chapters.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </form>
    </>
  );
}
