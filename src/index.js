import './index.css'; // Importing CSS styles
import React from 'react'; // Importing React library
import ReactDOM from 'react-dom/client'; // Importing ReactDOM client
import App from './App'; // Importing the main App component
import { NavigationProvider } from './context/navigation'; // Importing NavigationProvider from navigation context

const el = document.getElementById('root'); // Getting the root element from the DOM
const root = ReactDOM.createRoot(el); // Creating a root for ReactDOM

root.render( // Rendering the app into the root
  <NavigationProvider> {/* Providing navigation context */}
    <App /> {/* Rendering the main App component */}
  </NavigationProvider>
);
