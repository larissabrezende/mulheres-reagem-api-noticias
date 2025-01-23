const express = require("express");
const connectDB = require("./config/db");
const newsRoutes = require("./routes/newsRoutes");
const path = require("path");
require("dotenv").config();

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api", newsRoutes);

app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(err.status || 500).json({
    error: err.message || "Ocorreu um erro interno no servidor.",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
