import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LongestSubstringCalculator from "./features/LongestSubstringCalculator";
import BinaryTreePathSumCalculator from "./features/BinaryTreePathSumCalculator";
import Dashboard from "./pages/Dashboard";  // New Dashboard page after login
import { setAuthenticated } from "./redux/authSlice"; // Redux action to update authentication state

// Helper function to check if the user is authenticated
const isAuthenticated = () => {
  const authToken = localStorage.getItem("authToken");
  return authToken !== null;
};

const App = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken && authToken !== token) {
      console.log("Updating Redux token...");
      dispatch(setAuthenticated(authToken));
    }
  }, [dispatch, token]);
  
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/substring-calculator"
          element={isAuthenticated() ? <LongestSubstringCalculator /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/binary-tree-calculator"
          element={isAuthenticated() ? <BinaryTreePathSumCalculator /> : <Navigate to="/login" replace />}
        />
      </Routes>
    </Router>
  );
};

export default App;
