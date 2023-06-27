import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import Login from "./pages/Login";
import AddExpense from "./pages/AddExpense";

function App() {
  const { token } = useSelector((state) => state.auth);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/" element={<PrivateRoute />}>
            <Route exact path="/" element={<Dashboard />} />
          </Route> */}
          <Route
            exact
            path="/"
            element={token ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            exact
            path="/register"
            element={token ? <Navigate to="/" /> : <Register />}
          />
          <Route
            exact
            path="/login"
            element={token ? <Navigate to="/" /> : <Login />}
          />
          <Route
            exact
            path="/add-expense"
            element={token ? <AddExpense /> : <Login />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
