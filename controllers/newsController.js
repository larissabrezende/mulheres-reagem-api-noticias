const News = require("../models/News");
const path = require("path");
const fs = require("fs");

const createNews = async (req, res) => {
  const { title, content } = req.body;
  let imagePath = "";

  if (req.file) {
    imagePath = path.join("uploads/images", req.file.filename);
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
    imagePath = path.join("uploads/images", req.file.filename);

    try {
      const existingNews = await News.findById(req.params.id);
      if (
        existingNews &&
        existingNews.image &&
        fs.existsSync(existingNews.image)
      ) {
        fs.unlinkSync(existingNews.image);
      }
    } catch (error) {
      console.error("Erro ao remover a imagem antiga:", error.message);
    }
  }

  try {
    const news = await News.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
        image: imagePath,
      },
      { new: true }
    );

    if (!news) {
      return res.status(404).json({ message: "Notícia não encontrada" });
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
      return res.status(404).json({ message: "Notícia não encontrada" });
    }

    if (news.image && fs.existsSync(news.image)) {
      fs.unlinkSync(news.image);
    }

    res.status(200).json({ message: "Notícia excluída com sucesso" });
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
