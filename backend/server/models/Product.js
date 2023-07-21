// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: Number,
  categoryId: Number,
  name: String,
  price: Number,
  imageUrl: String,
  description: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
