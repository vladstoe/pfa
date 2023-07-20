import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import { products } from './mockData';
import { categories } from './mockData';


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
        {/* Define the routes for different pages */}
        <Route
          path="/"
          element={<Home
            categories={categories}
            selectedCategory={selectedCategory}
            handleCategoryClick={handleCategoryClick}
            filteredProducts={searchedProducts} // Use the searched products for rendering
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
