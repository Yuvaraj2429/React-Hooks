import React, { useState, useEffect } from 'react';

const statesData = {
  "California": ["Los Angeles", "San Francisco", "San Diego"],
  "Texas": ["Houston", "Dallas", "Austin"],
  "New York": ["New York City", "Buffalo", "Rochester"],
};

function App() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const filteredCities = statesData[selectedState] || [];
    setCities(filteredCities);
    // Reset selected city when the state changes
    setSelectedCity("");
  }, [selectedState]);

  return (
    <div>
      <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
        <option value="">Select State</option>
        {Object.keys(statesData).map((state, key) => (
          <option key={key} value={state}>
            {state}
          </option>
        ))}
      </select>
      <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
        <option value="">Select City</option>
        {cities.map((city, key) => (
          <option key={key} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;
