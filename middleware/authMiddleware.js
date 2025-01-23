const jwt = require("jwt-simple");
require("dotenv").config();

const authMiddleware = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.decode(token, process.env.JWT_SECRET);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      return res.status(401).json({ message: "Token expired" });
    }

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(400).json({ message: "Invalid token" });
  }
};

module.exports = authMiddleware;
