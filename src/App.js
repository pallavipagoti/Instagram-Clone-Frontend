import "./App.css";
import Router from "./Pages/Router/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter className="App">
      <Router />
    </BrowserRouter>
  );
}

export default App;
