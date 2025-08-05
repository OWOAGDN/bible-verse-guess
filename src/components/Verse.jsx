import { useState } from "react";

export default function Verse({ translation }) {
  const [verses, setVerses] = useState([{}]);
  return (
    <>
      <p>{translation} Display Verse Here</p>
    </>
  );
}
