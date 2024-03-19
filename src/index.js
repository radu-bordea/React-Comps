// Importing necessary modules and styles
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { NavigationProvider } from './context/navigation';

// Getting the root element
const el = document.getElementById('root');

// Creating a root React DOM
const root = ReactDOM.createRoot(el);

// Rendering the main App component wrapped with NavigationProvider
root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);
