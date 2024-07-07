import React from 'react'; // Import React
import ReactDOM from 'react-dom/client'; // Import ReactDOM for rendering
import App from './App'; // Import the App component
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS for styling
import './index.css'; // Import the index CSS file

// Render the App component into the root element in the HTML
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
