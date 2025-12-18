import { useState, useEffect } from "react";
import { GetData } from "../utility/getData";

export default function SelectBook({ getBook, translation }) {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    GetData.getBooks(translation).then((data) => {
      console.log(data.books);
      setBooks(() => data.books);
    });
  }, [translation]);
  return (
    <form>
      <select name="books" id="books" onChange={getBook}>
        <option>{null}</option>
        {books.map((book, index) => (
          <option key={index} value={book.name}>
            {book.name}
          </option>
        ))}
      </select>
    </form>
  );
}
