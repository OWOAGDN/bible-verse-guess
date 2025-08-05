export default function SelectTranslation({ setTranslation }) {
  const translations = [
    {
      id: "BSB",
      name: "Berean Standard",
    },
    {
      id: "ENGWEBP",
      name: "World English",
    },
    {
      id: "eng_asv",
      name: "American Standard Version",
    },
    {
      id: "eng_kjv",
      name: "King James Version",
    },
    {
      id: "eng_pev",
      name: "Plain English",
    },
  ];

  const handleClick = (e) => {
    e.preventDefault();
    setTranslation(() => e.target.value);
  };
  return (
    <>
      <h2>Select a translation</h2>
      <form className="flex mb-5">
        {translations.map((t, index) => (
          <button
            className="text-xs flex justify-center rounded-sm p-1 m-1 w-24 border-2 border-solid hover:cursor-pointer hover:shadow-lg focus:bg-amber-300"
            key={index}
            value={t.id}
            onClick={handleClick}
          >
            {t.name}
          </button>
        ))}
      </form>
    </>
  );
}
