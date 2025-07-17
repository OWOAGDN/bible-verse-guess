import { useState } from "react";

export default function SelectChapter({
  chapter,
  getChapter,
  selectedChapter,
}) {
  return (
    <form>
      <select name="chapters" id="chapters" onChange={getChapter}>
        {chapter.map((chap) => (
          <option value={chap}>{chap}</option>
        ))}
      </select>
      {true && selectedChapter}
    </form>
  );
}
