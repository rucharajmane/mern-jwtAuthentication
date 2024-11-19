import React, { useState } from "react";
import axios from "axios";
import "./Register.css";

const Register = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/register",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }
      );
      localStorage.setItem("token", response.data.token);
      setIsLoggedIn(true);
      alert("Registration is SUCCESSFUL");
    } catch (err) {
      const errorMessage = err.response?.data?.message || "An error occurred";
      alert("Error: " + errorMessage);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        placeholder="Enter your name"
        value={formData.name}
        onChange={(ev) => setFormData({ ...formData, name: ev.target.value })}
        className="form-input"
      />
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
      <input
        type="password"
        placeholder="Confirm your password"
        value={formData.confirmPassword}
        onChange={(ev) =>
          setFormData({ ...formData, confirmPassword: ev.target.value })
        }
        className="form-input"
      />
      <button type="submit" className="form-submit-btn">
        Register
      </button>
    </form>
  );
};

export default Register;
