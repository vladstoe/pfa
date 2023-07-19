import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

import './App.css';



const Home = ({ categories, selectedCategory, handleCategoryClick, filteredProducts }) => {
  return (
    <div>
      <Header onCategoryClick={handleCategoryClick} />
      <SearchBar />
      {!selectedCategory ? (
        <div className='text'>
          <h1>Welcome to Our Homepage!</h1>
          <p>Choose from the following categories:</p>
          <div className="categories-container">
            {categories.map((category) => (
              <div
                key={category.id}
                className="category-item"
                onClick={() => handleCategoryClick(category.id)}
              >
                {category.name}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="product-list">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const products = [
    { id: 1, categoryId: 1, name: 'Product 1', price: 10.99, imageUrl: 'https://example.com/product1.jpg' },
    { id: 2, categoryId: 1, name: 'Product 2', price: 12.99, imageUrl: 'https://example.com/product2.jpg' },
    { id: 3, categoryId: 2, name: 'Product 3', price: 8.99, imageUrl: 'https://example.com/product3.jpg' },
    { id: 4, categoryId: 3, name: 'Product 4', price: 13.99, imageUrl: 'https://example.com/product4.jpg' },
    // Add more products as needed
  ];

  const categories = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
    // Add more categories as needed
  ];

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.categoryId === selectedCategory)
    : [];

    return (
      <Router>
        <Routes>
          {/* Define the routes for different pages */}
          <Route path="/" element={<Home
            categories={categories}
            selectedCategory={selectedCategory}
            handleCategoryClick={handleCategoryClick}
            filteredProducts={filteredProducts}
          />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* Add other routes as needed */}
        </Routes>
      </Router>
    );
  };

export default App;
