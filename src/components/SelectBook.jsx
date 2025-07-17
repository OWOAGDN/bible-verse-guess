export default function SelectBook({ book, getBook }) {
  return (
    <form>
      <select name="Books" id="Books" onChange={getBook}>
        {book.map((b) => (
          <option value={b}>{b}</option>
        ))}
      </select>
    </form>
  );
}
