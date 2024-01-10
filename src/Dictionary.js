import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyWord, setKeyWord] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`Seaching for ${keyWord}`);

    //https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "4126dae244a02f134d2t0cdo0b2944b0";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
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
