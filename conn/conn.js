const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const conn = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGODB_URI).then(() => {
      console.log('Connected');
    });
  } catch (error) {
    console.log(error);
  }
};
conn();
