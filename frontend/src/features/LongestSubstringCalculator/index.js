// src/features/LongestSubstringCalculator/index.js
import React, { useState } from "react";

const LongestSubstringCalculator = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState({ length: 0, substrings: [] });

  const calculateSubstring = () => {
    const length = longestUniqueSubstring(input);
    const substrings = uniqueSubstrings(input);
    setResults({ length, substrings });
  };

  const longestUniqueSubstring = (str) => {
    let maxLength = 0;
    let seen = new Map();
    for (let start = 0, end = 0; end < str.length; end++) {
      if (seen.has(str[end])) start = Math.max(seen.get(str[end]) + 1, start);
      seen.set(str[end], end);
      maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
  };

  const uniqueSubstrings = (str) => {
    let result = [];
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= Math.min(i + 10, str.length); j++) {
        let substr = str.slice(i, j);
        if (new Set(substr).size === substr.length) result.push(substr);
      }
    }
    return result;
  };

  return (
    <div>
      <h2>Longest Substring Calculator</h2>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter string" />
      <button onClick={calculateSubstring}>Calculate</button>
      <p>Longest Substring Length: {results.length}</p>
      <div>
        Unique Substrings:
        <ul>
          {results.substrings.map((s, index) => <li key={index}>{s}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default LongestSubstringCalculator;
