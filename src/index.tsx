import useFetchData from "./hooks/useFetchData";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const posts = useFetchData();
  return (
    <div className="App">
      <h1>helo world</h1>
    </div>
  );
}

export default App;
