import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice'; // Assuming logout action is in authSlice

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Dispatch the logout action to clear the user and token from the Redux store
    dispatch(logout());
    
    // Redirect to the login page after logout
    navigate('/login');
  };

  return (
    <div>
      <h1>Welcome to Your Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/substring-calculator">Longest Substring Calculator</Link></li>
          <li><Link to="/binary-tree-calculator">Binary Tree Path Sum Calculator</Link></li>
        </ul>
      </nav>
      {/* Display history or saved data here if applicable */}
      
      {/* Logout button */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
