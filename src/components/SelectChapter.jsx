import { useState } from "react";

export default function SelectChapter({ getVersus }) {
  const [chapter, setChapter] = useState(["Genesis", "Exodus", "Detueronomy"]);
  const [selectedChapter, setSelectedChapter] = useState(chapter[0]);
  const getChapter = (e) => setSelectedChapter(e.target.value);

  return (
    <form>
      <select onChange={getChapter} name="chapters" id="chapters">
        {chapter.map((chap) => (
          <option value={chap}>{chap}</option>
        ))}
      </select>
      {selectedChapter}
    </form>
  );
}
