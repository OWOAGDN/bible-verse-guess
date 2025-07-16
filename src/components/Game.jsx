import Verse from "./Verse";
import SelectChapter from "./SelectChapter";

export default function Game() {
  const getVerses = () => {};
  return (
    <>
      <div>
        <Verse />
      </div>
      <div>
        <SelectChapter getVerses={getVerses} />
      </div>
    </>
  );
}
