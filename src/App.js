import "./App.scss";
import Searchtile from "./components/search/Searchtile";
import Navbar from "./navbar/Navbar";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Searchtile />
    </div>
  );
}

export default App;
