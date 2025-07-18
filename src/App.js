import React from 'react';
import './App.css';
import ProductCard from './ProductCard'; // Import the new ProductCard component
import DescriptionCard from './DescriptionCard';

function App() {
  return (
    <div className="app-container">
      <h1 className="main-title">BRADOCK GUN'S</h1>
      <div className="component-placeholder">
        {/* Your ProductCard component will go here */}
        <ProductCard />
        <DescriptionCard />
      </div>
    </div>
  );
}

export default App;