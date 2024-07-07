import React, { useState } from 'react'; // Import React and useState hook
import { Button, ButtonGroup, Container } from 'react-bootstrap'; // Import Button, ButtonGroup, and Container components from React Bootstrap
import './HealthTracker.css'; // Import the HealthTracker CSS file

// Define the HealthTracker component
function HealthTracker() {
  const [foodCount, setFoodCount] = useState(0); // State for food count
  const [activityCount, setActivityCount] = useState(0); // State for activity count

  return (
    <Container className="health-tracker mt-3"> 
      {/* Use Container to wrap the health tracker section with top margin */}
      <div className="tracker food mb-3"> 
        {/* Div for the food tracker with Bootstrap margin-bottom class */}
        <span>Food! {foodCount}</span> 
        {/* Display the food count */}
        <ButtonGroup> 
          {/* Use ButtonGroup to group the buttons */}
          <Button variant="outline-secondary" onClick={() => setFoodCount(Math.max(0, foodCount - 1))}>-</Button> 
          {/* Decrement button */}
          <Button variant="outline-secondary" onClick={() => setFoodCount(foodCount + 1)}>+</Button> 
          {/* Increment button */}
        </ButtonGroup>
      </div>
      <div className="tracker activities mb-3"> 
        {/* Div for the activity tracker with Bootstrap margin-bottom class */}
        <span>Activities! {activityCount}</span> 
        {/* Display the activity count */}
        <ButtonGroup> 
          {/* Use ButtonGroup to group the buttons */}
          <Button variant="outline-secondary" onClick={() => setActivityCount(Math.max(0, activityCount - 1))}>-</Button> 
          {/* Decrement button */}
          <Button variant="outline-secondary" onClick={() => setActivityCount(activityCount + 1)}>+</Button> 
          {/* Increment button */}
        </ButtonGroup>
      </div>
      <Button variant="success" className="w-100">I'm feeling crazy</Button> 
      {/* Button for "I'm feeling crazy" with Bootstrap success variant and full width class */}
    </Container>
  );
}

export default HealthTracker; // Export the HealthTracker component
