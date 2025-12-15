import { useEffect } from "react";

export default function Verse({ verse }) {
  return (
    <>
      <p>{`"${verse}"` ?? "...loading"}</p>
    </>
  );
}
