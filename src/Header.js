import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = ({ onCategoryClick }) => {
  const [categories] = useState([
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
    // Add more categories as needed
  ]);

  const handleCategoryClick = (categoryId) => {
    onCategoryClick(categoryId);
  };

  return (
    <header className="header">
      <div className="logo">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEUAAAD///+1tbXy8vKNjY1ubm5MTEyampppaWnx8fH4+Pjb29v19fUlJSVSUlLi4uK9vb3Kysqtra1+fn6ioqJ4eHjp6enDw8MyMjLQ0NBZWVk/Pz8WFhZHR0fU1NRzc3M6OjoLCwucnJxhYWGHh4ceHh4jIyMZGRkrKyuQiNwPAAAC+ElEQVR4nO3a6XqqMBCAYYOoIIiIuNZau9r7v8IjSz0oi4AkwPN872/NzMgkhMhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPTOe9sJyDYetxt/tpUdQJMcoJDjf3zKjjH8lR0hz1bf2ZrsCzgYzF3pITKt3KEwvxQE2omZgih3Pr25EGLhqIjliYWKMAnjiSUC/reScLoQeyWBIlt9EVYn5ktFEQ0hTEWhBueVa0bliY2S9gy8BM2iJJLhrePqxNQ/KwkZml4CnqRHcXxLXClrz1AQeCg3xOWOJxI2andPWhBT4s1wtnTtZHlT/yAvWJZVGFaXNLqhrcUNte0Z2EaBZaxq++TEa6U9Q/FP/NPwsC+3E6+d9gxpcfQmx/xZbqap8sR81WSM0vZ/P29jI47uJ1577RmyG61w78+zqmupPUPeNYmnh3qdHDOra609Q6f/aTz19Dv7ypp4Efe1qWzrSCzmRt0xDm+amVedsD+aTLc6I5GLV2uE6Ak2j9Vie0aSi55d+dvj3IkXt+eLhJSrGd0k9Fblq5cn2NyJF5pOunD2ettgpZ+AD8HRUTGr0s8ljXOXVqnTUqNw4sXt2erqmbC5z+zR44WT3kin2RMlyZeSzq4guayNdIaOtGdkmZHgLnN5OC83dsaH0zqweiZlXxPvdPupn7fsjXTasEPtGcnLdO3qxut2e3IM3duVu3YX1qjtelL2j7Mur2PtGZk0Vl732jOSulfU1MH2jD2+cZfRyfaMlV5D8nW1PWPFG+cSutuesSfr0zrcnrFnrqHZ7faM5Z88PHLsenvGip/P8yl4ZaIhfp3yTFn/38hQY9d2rH0e145HJxH3tFPbGVelVymvV+15VX417Vt7/hmXbc/erJ4pWecY99a9bM+rh1Nxo/I9KSlWReVZKt4XlO43b2tz1NW8T6eAs0jPPa0nO8+y3lfaPH4eNi1Xl/4qclsO3wrfowMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB66B90Khxsnli+aAAAAABJRU5ErkJggg=="
          alt="logo"
          width="30px"
        />
      </div>
      <nav className="nav-bar">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item nav-dropdown">
            <a href="#">Products</a>
            <ul className="dropdown-menu">
              {categories.map((category) => (
                <li
                  key={category.id}
                  className="dropdown-item"
                  onClick={() => handleCategoryClick(category.id)}
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </li>
          <li className="nav-item">
            <a href="/cart">Cart</a>
          </li>
        </ul>
      </nav>
      <div className="user-auth">
        {/* Show login, signup, or user profile links here based on authentication status */}
        <Link to="/login">Login</Link>
        <Link to="/register">Sign up</Link>
      </div>
    </header>
  );
};

export default Header;
