import { useState } from 'react';

import Navigation from '../Navigation/Nav.js';
import Products from '../Products/Products.js';
import products from '../db/data.js'
import Recommended from '../Recommended/Recommended.js';
import Sidebar from '../Sidebar/Sidebar.js';
import Card from '../components/Card.js';
import '../index.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    // Fetch suggestions based on the input value
    fetchSuggestions(value);
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

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = products.filter(
        (product) => product.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ id,img, title, star, reviews, newPrice }) => (
        <Card
          key={id}
          id={id}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <div>
       <Navigation 
        query={query} 
        handleInputChange={handleInputChange} 
        suggestions={suggestions} 
      />
      <Sidebar handleChange={handleChange} />
     
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </div>
  );
}

export default App;
