import React from 'react'; // Import React
import { Navbar, Nav } from 'react-bootstrap'; // Import Navbar and Nav components from React Bootstrap
import './Footer.css'; // Import the Footer CSS file

// Define the Footer component
function Footer() {
  return (
    <Navbar bg="light" fixed="bottom"> 
      {/* Use Navbar for the footer with light background and fixed bottom */}
      <Nav className="mx-auto"> 
        {/* Use Nav for navigation items and center them */}
        <Nav.Link href="#">Home</Nav.Link> 
        {/* Nav.Link for Home */}
        <Nav.Link href="#">Favorites</Nav.Link> 
        {/* Nav.Link for Favorites */}
        <Nav.Link href="#">Add Food</Nav.Link> 
        {/* Nav.Link for Add Food */}
        <Nav.Link href="#">Add Activity</Nav.Link> 
        {/* Nav.Link for Add Activity */}
        <Nav.Link href="#">Menu</Nav.Link> 
        {/* Nav.Link for Menu */}
      </Nav>
    </Navbar>
  );
}

export default Footer; // Export the Footer component
