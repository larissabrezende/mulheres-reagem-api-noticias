const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "O título é obrigatório."],
    trim: true,
  },
  content: {
    type: String,
    required: [true, "O conteúdo é obrigatório."],
    trim: true,
  },
  image: {
    type: String,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("News", NewsSchema);
