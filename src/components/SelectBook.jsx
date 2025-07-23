export default function SelectBook({ book, getBook }) {
  return (
    <form>
      <select name="books" id="books" onChange={getBook}>
        {book.map((b) => (
          <option value={b}>{b}</option>
        ))}
      </select>
    </form>
  );
}
