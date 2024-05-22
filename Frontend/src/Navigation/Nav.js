





import React, { useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = ({ handleInputChange, query, suggestions }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [loginSignupVisible, setLoginSignupVisible] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownVisible(!dropdownVisible);
    setLoginSignupVisible(false);
  };

  const handleLoginSignupToggle = () => {
    setLoginSignupVisible(!loginSignupVisible);
    setDropdownVisible(false);
  };

  const handleSuggestionClick = (productId) => {
    
    window.location.href = `/details/${productId}`;
  };

  return (
    <nav>
      <h1>🛒</h1>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
          onFocus={handleDropdownToggle}
        />
        {dropdownVisible && suggestions.length > 0 && (
          <div className="suggestions-dropdown">
            {suggestions.map((suggestion) => (
              <div
                key={suggestion.id}
                className="suggestion-item"
                onClick={() => handleSuggestionClick(suggestion.id)} // Handle suggestion click
              >
                {suggestion.title}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <div className="dropdown-container" onClick={handleLoginSignupToggle}>
          <AiOutlineUserAdd className="nav-icons" />
          {loginSignupVisible && (
            <div className="dropdown-menu">
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
