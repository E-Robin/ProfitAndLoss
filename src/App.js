import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🙈": "See no evil",
  "🙊": "Speak no evil ",
  "🦍": "Gorrila",
  "🐶": "Dog",
  "🐺": "Wolf",
  "🦁": "Lion",
  "🦌": "Dear",
  "🐘": "Elephant"
};

var emojisWeKnow = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we dont have this value";
    }

    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Animal library !</h1>
      <input onChange={emojiInputHandler} />

      <h2 style={{ color: "red" }}> {meaning}</h2>
      <h1> emoji we know</h1>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span onClick={() => emojiClickHandler(emoji)} key={emoji}>
            {" "}
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
