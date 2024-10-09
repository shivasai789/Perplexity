import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import DetailsRoute from "./components/DetailsRoute";

function App() {
  return (
    <div className="bg-container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="details" element={<DetailsRoute />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
