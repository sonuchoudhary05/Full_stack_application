import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBinaryTreePathSum } from "../../redux/BinaryTreeSlice";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const BinaryTreePathSumCalculator = () => {
  const [treeData, setTreeData] = useState("");
  const [targetSum, setTargetSum] = useState("");
  const dispatch = useDispatch();
  const pathSum = useSelector((state) => state.binaryTree.pathSum);
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle the dashboard redirection
  const goToDashboard = () => {
    navigate("/dashboard"); // Navigate to the dashboard page
  };

  const calculatePathSum = () => {
    const tree = JSON.parse(treeData);
    const sum = parseInt(targetSum, 10);
    const hasPathSum = hasPathSumHelper(tree, sum);
    dispatch(setBinaryTreePathSum(hasPathSum ? sum : 0));
  };

  const hasPathSumHelper = (node, sum) => {
    if (!node) return false;
    if (!node.left && !node.right) return node.value === sum;
    return hasPathSumHelper(node.left, sum - node.value) || hasPathSumHelper(node.right, sum - node.value);
  };

  return (
    <div>
      <h2>Binary Tree Path Sum Calculator</h2>
      <textarea
        placeholder='Enter tree as JSON, e.g., {"value":5,"left":{"value":4},"right":{"value":8}}'
        value={treeData}
        onChange={(e) => setTreeData(e.target.value)}
      />
      <input
        placeholder="Target Sum"
        value={targetSum}
        onChange={(e) => setTargetSum(e.target.value)}
        type="number"
      />
      <button onClick={calculatePathSum}>Calculate</button>
      {pathSum ? <p>Path with sum {pathSum} exists!</p> : <p>No path with the specified sum.</p>}

      {/* Dashboard Button */}
      <button onClick={goToDashboard}>Go to Dashboard</button>
    </div>
  );
};

export default BinaryTreePathSumCalculator;
