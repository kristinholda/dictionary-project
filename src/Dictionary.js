import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyWord, setKeyWord] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function handleImageResponse(response) {
    console.log(response);
    setPhotos(response.data.photos);
  }

  function search() {
    //https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "4126dae244a02f134d2t0cdo0b2944b0";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let imageApiKey = "4126dae244a02f134d2t0cdo0b2944b0";
    let imgageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyWord}&key=${imageApiKey}`;
    axios.get(imgageApiUrl).then(handleImageResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeyWordChange(event) {
    setKeyWord(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              onChange={handleKeyWordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>

          <div className="hint">Suggested Words: sunset, plants, book...</div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
