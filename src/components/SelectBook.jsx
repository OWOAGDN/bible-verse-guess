export default function SelectBook({ book, getBook }) {
  return (
    <form>
      <select name="books" id="books" onChange={getBook}>
        <option>{null}</option>
        {book.map((b, index) => (
          <option key={index} value={b}>
            {b}
          </option>
        ))}
      </select>
    </form>
  );
}
