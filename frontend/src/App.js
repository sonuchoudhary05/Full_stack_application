// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LongestSubstringCalculator from "./features/LongestSubstringCalculator";
import BinaryTreePathSumCalculator from "./features/BinaryTreePathSumCalculator";

const App = () => (
  <Router>
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/substring-calculator" element={<LongestSubstringCalculator />} />
      <Route path="/binary-tree-calculator" element={<BinaryTreePathSumCalculator />} />
    </Routes>
  </Router>
);

export default App;
