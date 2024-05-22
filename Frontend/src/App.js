// 



import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import debounce from 'lodash.debounce';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Home from './Home/Home';
import View from './productdetails/productDetails';
import Nav from './Navigation/Nav';

function App() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const fetchSuggestions = async (query) => {
    try {
      if (query.length > 0) {
        const response = await fetch(`http://127.0.0.1:5000/suggestions?query=${query}`);
        const data = await response.json();
        setSuggestions(data);
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const debouncedFetchSuggestions = useCallback(debounce(fetchSuggestions, 300), []);

  useEffect(() => {
    debouncedFetchSuggestions(query);
  }, [query, debouncedFetchSuggestions]);

  return (
    <Router>
      <div>
        <Nav handleInputChange={handleInputChange} query={query} suggestions={suggestions} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/details/:productId" element={<View />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
