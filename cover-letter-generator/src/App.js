import "./App.css";
import CoverLetterForm from "./form/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3 className="heading">Cover Letter Generator</h3>
      </header>
      <section>
        <CoverLetterForm />
      </section>
      <footer></footer>
    </div>
  );
}

export default App;
