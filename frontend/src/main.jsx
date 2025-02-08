import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './components/HomePage'; // Import HomePage
import './index.css'; // Ensure global styles are imported

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);
