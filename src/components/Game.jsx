import Verse from "./Verse";
import SelectBook from "./SelectBook";
import VerseSelect from "./VerseSelect";
import SelectChapter from "./SelectChapter";
import { useState } from "react";
import SelectTranslation from "./SelectTranslation";
import GenerateVerse from "./GenerateVerse";

export default function Game() {
  const [book, setBook] = useState(["Genesis", "Exodus", "Detueronomy"]);
  const [selectedBook, setSelectedBook] = useState();
  const [randomVerse, setRandomVerse] = useState();
  const [selectedChapter, setSelectedChapter] = useState();
  const [selectedVerse, setSelectedVerse] = useState();
  const [translation, setTranslation] = useState();
  const getBook = (e) => {
    setSelectedBook(() => e.target.value);
    setSelectedChapter();
  };
  const getChapter = (e) => setSelectedChapter(() => e.target.value);
  const getSelectedVerse = (e) => setSelectedVerse(() => e.target.value);
  return (
    <>
      <div>
        <SelectTranslation setTranslation={setTranslation} />
      </div>
      <div>
        {translation && (
          <GenerateVerse
            setRandomVerse={setRandomVerse}
            selectedTrans={translation}
          />
        )}
      </div>
      <div>{randomVerse && <Verse verse={randomVerse} />}</div>
      <div className="flex justify-center">
        {randomVerse && <SelectBook book={book} getBook={getBook} />}
        {selectedBook && (
          <SelectChapter selectedBook={selectedBook} getChapter={getChapter} />
        )}
        {selectedChapter && (
          <VerseSelect
            getSelectedVerse={getSelectedVerse}
            selectedChapter={selectedChapter}
          />
        )}
      </div>
    </>
  );
}
