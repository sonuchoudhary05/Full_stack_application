import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/authSlice";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      {error && (
        <p style={{ color: "red" }}>
          {/* Render error message */}
          {typeof error === "object" && error.msg ? error.msg : error}
          {typeof error === "object" && error.msg === "User already exists" && (
            <NavLink to="/login">Login</NavLink>
          )}
        </p>
      )}
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" placeholder="Password" onChange={handleChange} type="password" />
      <button type="submit" disabled={loading}>Register</button>
    </form>
  );
};

export default Register;
