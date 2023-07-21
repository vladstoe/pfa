const mongoose = require('mongoose');
const Category = require('./models/Category');
const Product = require('./models/Product');

const data = {
  categories: [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
  ],
  products: [
    {
      id: 1,
      categoryId: 1,
      name: 'Product 1',
      price: 10.99,
      imageUrl: 'https://example.com/product1.jpg',
      description: 'Description of Product 1',
    },
    {
      id: 2,
      categoryId: 1,
      name: 'Product 2',
      price: 12.99,
      imageUrl: 'https://example.com/product2.jpg',
      description: 'Description of Product 2',
    },
    {
      id: 3,
      categoryId: 2,
      name: 'Product 3',
      price: 8.99,
      imageUrl: 'https://example.com/product3.jpg',
      description: 'Description of Product 3',
    },
    {
      id: 4,
      categoryId: 3,
      name: 'Product 4',
      price: 13.99,
      imageUrl: 'https://example.com/product4.jpg',
      description: 'Description of Product 4',
    },
    {
      id: 5,
      categoryId: 1,
      name: 'Product 5',
      price: 0.99,
      imageUrl: 'https://example.com/product5.jpg',
      description: 'Description of Product 5',
    },
  ],
};

async function populateData() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to Database');

    await Category.insertMany(data.categories);
    console.log('Categories inserted successfully');

    await Product.insertMany(data.products);
    console.log('Products inserted successfully');

    mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error populating data:', error);
    process.exit(1); // Exit the process with an error status
  }
}

populateData();
