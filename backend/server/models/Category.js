// models/Category.js
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  id: Number,
  name: String,
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
