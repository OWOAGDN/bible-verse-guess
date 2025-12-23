import { useState, useEffect } from "react";
import { GetData } from "../utility/getData";

export default function SelectBook({ books, setBooks, getBook, translation }) {
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
        {books.map((book) => (
          <option key={book.id} value={book.id}>
            {book.name}
          </option>
        ))}
      </select>
    </form>
  );
}
