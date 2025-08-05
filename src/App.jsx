import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Game from "../src/components/Game";
import "./App.css";

function App() {
  return (
    <>
      <header className="mb-10">
        <h1 className="text 3x1 font-bold">Guess the Verse!</h1>
      </header>
      <Game />
    </>
  );
}

export default App;
