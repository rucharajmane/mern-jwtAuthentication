import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Register from "./components/Register.js"; // Fixed path
import Login from "./components/Login.js"; // Fixed path

function App() {
  return (
    <Router>
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        {/* Navigation Bar */}
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "10px" }}>
            Home
          </Link>
          <Link to="/register" style={{ marginRight: "10px" }}>
            Register
          </Link>
          <Link to="/login">Login</Link>
        </nav>

        {/* Application Routes */}
        <Routes>
          <Route path="/" element={<h1>Welcome to Login/Register</h1>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
