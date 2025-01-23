const express = require("express");
const upload = require("../middleware/upload");
const newsController = require("../controllers/newsController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/news", newsController.getAllNews);
router.post(
  "/news",
  authMiddleware,
  upload.single("image"),
  newsController.createNews
);
router.put(
  "/news/:id",
  authMiddleware,
  upload.single("image"),
  newsController.updateNews
);
router.delete("/news/:id", authMiddleware, newsController.deleteNews);

module.exports = router;
