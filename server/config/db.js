const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    /*  await mongoose.connect(process.env.MONGODB_ATLAS_CONNECTION_STRING, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }); */

    await mongoose.connect(process.env.MONGODB_ATLAS_CONNECTION_STRING);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("MongoDB connection error", err);
    process.exit(1);
  }
};

module.exports = connectDB;
