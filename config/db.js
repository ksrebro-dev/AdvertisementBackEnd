const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = async () => {
  try {
    const dbPassword = process.env.DB_PASSWORD;
    await mongoose.connect(`mongodb+srv://testowaogloszenie:${dbPassword}@advertisement.6jyry.mongodb.net/?retryWrites=true&w=majority&appName=Advertisement`);
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
