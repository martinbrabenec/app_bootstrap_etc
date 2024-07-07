import React, { useEffect, useState } from 'react'; // Import React, useEffect, and useState hooks
import { Container, Row, Col } from 'react-bootstrap'; // Import Container, Row, and Col components from React Bootstrap
import './QuickAccess.css'; // Import the QuickAccess CSS file

// Define the QuickAccess component
function QuickAccess() {
  const [items, setItems] = useState([]); // State for storing image URLs

  useEffect(() => {
    // Generate 8 random photo URLs and set the state
    const newItems = Array.from({ length: 8 }, (_, i) => 
      `https://picsum.photos/100?random=${i}`
    );
    setItems(newItems);
  }, []);

  return (
    <Container className="quick-access-container mt-3">
      {/* Use Container to wrap the quick access section with top margin */}
      <div className="quick-access">
        {/* Use a div to create a scrollable area */}
        {items.map((item, index) => (
          <div className="quick-item" key={index}>
            {/* Use a div for each quick access item */}
            <img src={item} alt={`Item ${index + 1}`} className="img-fluid rounded" />
            {/* Image with Bootstrap fluid and rounded classes */}
          </div>
        ))}
      </div>
    </Container>
  );
}

export default QuickAccess; // Export the QuickAccess component
