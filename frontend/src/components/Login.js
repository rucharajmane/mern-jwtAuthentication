import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );
      alert("You're logged in successfully");
      console.log(response.data);
    } catch (err) {
      const errorMessage = err.response?.data?.message || "An error occurred";
      alert("Error: " + errorMessage);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={(ev) => setFormData({ ...formData, email: ev.target.value })}
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={(ev) =>
          setFormData({ ...formData, password: ev.target.value })
        }
      />
      <button type="submit">LogIn</button>
    </form>
  );
};

export default Login;
