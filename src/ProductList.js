import React, { useState } from 'react';
import { categories, products } from './mockData';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  // Filter products based on the selected category
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.categoryId === selectedCategory)
    : products;

  return (
    <div className="product-list-container">
      {/* Render categories in the navigation */}
      <ul className="categories-list">
        {categories.map((category) => (
          <li
            key={category.id}
            className={selectedCategory === category.id ? 'active' : ''}
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.name}
          </li>
        ))}
      </ul>

      {/* Render product cards */}
      <div className="product-cards-container">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
