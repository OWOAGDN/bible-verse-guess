import { GetData } from "../utility/getData";

export default function VerseSelect() {
  const handleClick = (event) => {
    event.preventDefault();
    GetData.getTranslations()
      .then((data) => data.translations.filter((tr) => tr.language === "eng"))
      .then((english) => console.log(english));
  };
  return (
    <>
      Verses Here!
      <form>
        <button onClick={handleClick}>Translations Here</button>
      </form>
    </>
  );
}
