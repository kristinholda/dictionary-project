import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyWord, setKeyWord] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Seaching for ${keyWord}`);
  }

  function handleKeyWordChange(event) {
    setKeyWord(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeyWordChange} />
      </form>
    </div>
  );
}
