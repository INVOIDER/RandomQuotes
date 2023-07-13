import QuoteParser from "./components/QuoteParser/QuoteParser";
import Header from "./components/header/header";
import "./styles/App.css"
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="content-wrapper">
        <QuoteParser/>
      </div>
    </div>
  );
}

export default App;
