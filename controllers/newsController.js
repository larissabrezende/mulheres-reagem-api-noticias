const News = require('../models/News');
const path = require('path');

const createNews = async (req, res) => {
  const { title, content } = req.body;
  let imagePath = '';

  if (req.file) {
    imagePath = path.join('uploads/images', req.file.filename);
  }

  try {
    const news = new News({
      title,
      content,
      image: imagePath,
    });

    await news.save();
    res.status(201).json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateNews = async (req, res) => {
  const { title, content } = req.body;
  let imagePath = req.body.image;

  if (req.file) {
    imagePath = path.join('uploads/images', req.file.filename);
  }

  try {
    const news = await News.findByIdAndUpdate(req.params.id, {
      title,
      content,
      image: imagePath,
    }, { new: true });

    if (!news) {
      return res.status(404).json({ message: "News not found" });
    }

    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteNews = async (req, res) => {
  try {
    const news = await News.findByIdAndDelete(req.params.id);

    if (!news) {
      return res.status(404).json({ message: "News not found" });
    }

    res.status(200).json({ message: "News deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllNews = async (req, res) => {
  try {
    const news = await News.find();
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createNews,
  updateNews,
  deleteNews,
  getAllNews,
};

