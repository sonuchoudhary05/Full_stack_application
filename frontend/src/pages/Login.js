import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/authSlice";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [responseError, setResponseError] = useState(null);
  const { loading, error, token } = useSelector((state) => state.auth);

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(loginUser(formData));
    console.log("Response:", response);

    // Check if the login attempt was rejected
    if (loginUser.rejected.match(response)) {
      const errorMessage = response.payload?.msg || "Login failed"; // Extract error message
      setResponseError(errorMessage);
    } else if (loginUser.fulfilled.match(response)) {
      // Navigate to dashboard if login was successful
      navigate("/dashboard");
    }
  };

  // Navigate to dashboard if token is available
  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token, navigate]);

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {/* Render the error message */}
      {responseError && <p style={{ color: "red" }}>{error.message}</p>}
      {responseError && (
        <div>
          <p>User not registered. Please register to continue.</p>
          <NavLink to="/register">Register</NavLink>
        </div>
      )}

      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={formData.email}
        required
      />
      <input
        name="password"
        placeholder="Password"
        type="password"
        onChange={handleChange}
        value={formData.password}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};

export default Login;
