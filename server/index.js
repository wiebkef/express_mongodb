require("dotenv/config");
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");
const PORT = process.env.PORT || 5000;
const app = express();
const studentsRouter = require("./routes/students");

app.use(cors());
app.use(express.json());
app.use("/api/students", studentsRouter);

/* joining and normalizing paths for deployment */
if (process.env.NODE_ENV === "production") {
  const buildPath = path.join(__dirname, "../client/build");
  app.use(express.static(buildPath));
  app.get("*", (req, res) => {
    res.sendFile(path.join(buildPath, "index.html"));
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
