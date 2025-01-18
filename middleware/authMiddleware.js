const jwt = require('jwt-simple');
require('dotenv').config();

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.decode(token, process.env.JWT_SECRET);
    if (decoded.role === 'admin' || decoded.role === 'moderator') {
      req.user = decoded;
      next();
    } else {
      return res.status(403).json({ message: "Access denied" });
    }
  } catch (error) {
    return res.status(400).json({ message: "Invalid token" });
  }
};

module.exports = authMiddleware;



