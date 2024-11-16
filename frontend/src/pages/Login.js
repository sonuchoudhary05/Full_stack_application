import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, token } = useSelector((state) => state.auth);

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Dispatch login action
    const response = await dispatch(loginUser(formData));
    // Assuming the response includes a flag or status to indicate user registration
    if (response?.error?.message === "Rejected") {
      // Navigate to the register page
      navigate('/register');
    } else if (response?.success) {
      // Navigate to the dashboard or another page after successful login
      navigate('/dashboard');
    }
  };

  // Navigate to dashboard if login is successful and token is available
  useEffect(() => {
    if (token) {
      console.log('Login successful. Token:', token); // Debugging: Ensure token is available
      navigate("/dashboard");
    }
  }, [token, navigate]);

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={formData.email}
      />
      <input
        name="password"
        placeholder="Password"
        type="password"
        onChange={handleChange}
        value={formData.password}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};

export default Login;
