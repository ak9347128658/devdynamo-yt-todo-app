const mongoose = require('mongoose');
const { getSecretValue } = require('./secrets');

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      let secret = await getSecretValue();
      console.log('secret', secret);
      secret = JSON.parse(secret);
      process.env.MONGODB_URI = secret['MONGODB_URI'];
    }
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;