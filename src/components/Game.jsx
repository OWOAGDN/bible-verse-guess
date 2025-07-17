import Verse from "./Verse";
import SelectChapter from "./SelectChapter";
import { useState } from "react";

export default function Game() {
  const [chapter, setChapter] = useState(["Genesis", "Exodus", "Detueronomy"]);
  const [selectedChapter, setSelectedChapter] = useState();
  const getChapter = (e) => setSelectedChapter(e.target.value);
  return (
    <>
      <div>
        <Verse />
      </div>
      <div>
        <SelectChapter
          chapter={chapter}
          getChapter={getChapter}
          selectedChapter={selectedChapter}
        />
      </div>
    </>
  );
}
