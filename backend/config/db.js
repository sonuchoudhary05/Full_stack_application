const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://sonukumar:yp2EeV3p9bw05fHX@cluster0.rulo3.mongodb.net/');  // Removed useNewUrlParser and useUnifiedTopology
    console.log("MongoDB connected...");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;