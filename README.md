Binary Tree Path Sum Calculator
A simple web application to calculate whether a binary tree has a path that sums up to a given target value.

Features
Enter a binary tree in JSON format.
Specify a target sum.
Calculate whether there is a path from the root to a leaf node that sums to the target value.
View the path sum results and unique substrings of the given string (for longest substring calculation).
Technologies Used
React: For building the user interface.
Redux: For managing application state.
Axios: For making HTTP requests (if required).
JavaScript: For logic implementation.
Setup Instructions
Prerequisites
Make sure you have the following installed:

Node.js (v14 or higher)
npm or yarn (npm is installed with Node.js)
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/your-username/binary-tree-path-sum-calculator.git
cd binary-tree-path-sum-calculator
Install dependencies:
bash
Copy code
npm install
Run the Application
To start the application locally, run the following command:

bash
Copy code
frontend
npm start
This will run the app on http://localhost:3000.
backend - cd backend
node server.js to run backend server - 
This will run the app on http://localhost:5000.

Project Structure
Full_stack-
(frontend, backend)
src
features
BinaryTreePathSumCalculator: Contains the logic for the binary tree path sum calculation.
LongestSubstringCalculator: Contains logic for calculating the longest substring.
redux: Contains Redux slices and actions.
App.js: The main entry point of the application.
index.js: Renders the application to the DOM.
How to Use
Binary Tree Path Sum Calculator
Input the Binary Tree: Enter the tree in JSON format (e.g., {"value": 5, "left": {"value": 4}, "right": {"value": 8}}).
Enter the Target Sum: Specify the target sum you want to check for.
Click Calculate: The app will display if a path with the target sum exists.
Longest Substring Calculator
Enter a String: Input a string of your choice.
Click Calculate: The app will display the length of the longest substring and a list of unique substrings.
.env - create in backend folder-
PORT=5000
MONGO_URI="mongodb+srv://sonu_800004:sonu_800004@cluster0.0gybcp7.mongodb.net/"
JWT_SECRET= "Jf!5dX8vY9S#0pQw1RtVkFz67sd0jX"
