import React from 'react'; // Import React
import { Navbar, Container } from 'react-bootstrap'; // Import Navbar and Container components from React Bootstrap
import './Header.css'; // Import the Header CSS file

// Define the Header component that takes a user prop
function Header({ user }) {
  return (
    // Use Navbar component for the header with a light background
    <Navbar bg="light" variant="light">
      <Container className="justify-content-between"> 
        {/* Use Container to wrap the content and justify it between */}
        <Navbar.Brand>Hi {user.name}!</Navbar.Brand> 
        {/* Use Navbar.Brand for the brand text */}
        <div className="time">08:45</div> 
        {/* Custom div for displaying the time */}
      </Container>
    </Navbar>
  );
}

export default Header; // Export the Header component
