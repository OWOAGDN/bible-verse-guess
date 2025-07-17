import Verse from "./Verse";
import SelectBook from "./SelectBook";
import VerseSelect from "./VerseSelect";
import { useState } from "react";

export default function Game() {
  const [book, setBook] = useState(["Genesis", "Exodus", "Detueronomy"]);
  const [selectedBook, setSelectedBook] = useState(book[0]);
  const getBook = (e) => setSelectedBook(e.target.value);
  return (
    <>
      <div>
        <Verse />
      </div>
      <div className="flex justify-center">
        <SelectBook book={book} getBook={getBook} selectedBook={selectedBook} />
        <VerseSelect />
      </div>
    </>
  );
}
