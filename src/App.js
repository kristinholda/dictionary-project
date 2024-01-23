import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>

        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by Kristin Holda,{" "}
            <a
              href="https://github.com/kristinholda/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced
            </a>{" "}
            on Github
          </small>
        </footer>
      </div>
    </div>
  );
}
