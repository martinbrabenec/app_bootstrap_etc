import React, { useState } from 'react'; // Import React and the useState hook
import Header from './components/Header'; // Import the Header component
import HealthTracker from './components/HealthTracker'; // Import the HealthTracker component
import QuickAccess from './components/QuickAccess'; // Import the QuickAccess component
import Footer from './components/Footer'; // Import the Footer component
import './App.css'; // Import the App CSS file

// Define the main App component
function App() {
  const [user, setUser] = useState({ name: 'Martin' }); // State to hold user information

  return (
    <div className="app"> 
      {/* Main container for the app */}
      <Header user={user} /> 
      {/* Render the Header component, passing the user state as a prop */}
      <main>
        {/* Main content area */}
        <HealthTracker /> 
        {/* Render the HealthTracker component */}
        <QuickAccess /> 
        {/* Render the QuickAccess component */}
      </main>
      <Footer /> 
      {/* Render the Footer component */}
    </div>
  );
}

export default App; // Export the App component as the default export
