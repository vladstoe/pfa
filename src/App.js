// App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import axios from 'axios'; // Import axios
import './App.css';

const Home = ({ categories, selectedCategory, handleCategoryClick, filteredProducts, onSearchQueryChange }) => {
  return (
    <div>
      <Header categories={categories} onCategoryClick={handleCategoryClick} />
      <SearchBar onSearchQueryChange={onSearchQueryChange} />
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
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch products from the server
    axios.get('/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });

    // Fetch categories from the server
    axios.get('/api/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.categoryId === selectedCategory)
    : products;

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
  };

  const searchedProducts = searchQuery
    ? filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : filteredProducts;

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home
            categories={categories}
            selectedCategory={selectedCategory}
            handleCategoryClick={handleCategoryClick}
            filteredProducts={searchedProducts}
            onSearchQueryChange={handleSearchQueryChange}
          />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
