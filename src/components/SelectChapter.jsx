import { useState } from "react";
import { HelperFunctions } from "../utility/helperFunctions";

export default function SelectChapter({ books, selectedBook, getChapter }) {
  const getNumberOfChapters = () => {
    const [book] = books.filter((b) => b.id === selectedBook);
    const chapterNumbers = book.numberOfChapters;
    const numArray = HelperFunctions.numberToArray(chapterNumbers);
    return numArray;
  };

  const chapters = getNumberOfChapters(selectedBook);

  return (
    <>
      <form>
        <select onChange={getChapter}>
          {chapters.map((chapter) => (
            <option key={chapter} value={chapter}>
              {chapter}
            </option>
          ))}
        </select>
      </form>
    </>
  );
}
