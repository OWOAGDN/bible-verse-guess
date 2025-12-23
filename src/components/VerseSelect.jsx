import { useEffect, useState } from "react";
import { GetData } from "../utility/getData";
import SelectBook from "./SelectBook";

export default function VerseSelect({
  getSelectedVerse,
  selectedChapter,
  translation,
  selectedBook,
}) {
  const [verses, setVerses] = useState();
  useEffect(() => {
    GetData.getVerses(translation, selectedBook, selectedChapter).then(
      (data) => {
        console.log(data);
        setVerses(() => data);
      }
    );
  }, [selectedChapter, selectedBook]);
  if (verses) {
    return (
      <>
        <form>
          <select onChange={getSelectedVerse}>
            {verses.map((v) => (
              <option key={v.number} value={v.number}>
                {v.number}
              </option>
            ))}
          </select>
        </form>
      </>
    );
  } else {
    return <p>Getting verses...</p>;
  }
}
