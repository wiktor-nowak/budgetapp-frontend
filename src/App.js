import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={<Dashboard />} />
          <Route path="/register" Component={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
