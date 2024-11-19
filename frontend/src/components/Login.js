import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
const Login = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/login",
        formData
      );
      localStorage.setItem("token", response.data.token);
      setIsLoggedIn(true);
      alert("You're logged in successfully");
    } catch (err) {
      const errorMessage = err.response?.data?.message || "An error occurred";
      alert("Error: " + errorMessage);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={(ev) => setFormData({ ...formData, email: ev.target.value })}
        className="form-input"
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={(ev) =>
          setFormData({ ...formData, password: ev.target.value })
        }
        className="form-input"
      />
      <button type="submit" className="form-submit-btn">
        LogIn
      </button>
    </form>
  );
};

export default Login;
