import React, { useState } from "react";
import axios from "axios";

const Register = () => {
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
        "http://localhost:5000/api/auth/register",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }
      );
      alert("Registration is SUCCESSFUL");
      console.log(response.data);
    } catch (err) {
      const errorMessage = err.response?.data?.message || "An error occurred";
      alert("Error: " + errorMessage);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        value={formData.name}
        onChange={(ev) => setFormData({ ...formData, name: ev.target.value })}
      />
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
      <input
        type="password"
        placeholder="Confirm your password"
        value={formData.confirmPassword}
        onChange={(ev) =>
          setFormData({ ...formData, confirmPassword: ev.target.value })
        }
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
