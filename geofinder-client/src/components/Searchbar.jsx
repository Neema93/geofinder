import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ setLocation, results, setCoordinates }) => {
  const [input, setInput] = useState("");

  const handleChange = (value) => {
    setInput(value);
    setLocation(value);
  };

  const handleSelect = (place) => {
    setInput(place.display_name);
    setLocation(place.display_name);

    setCoordinates({
      lat: parseFloat(place.lat),
      lng: parseFloat(place.lon),
    });
  };

  return (
    <div className="search-container">
      {/* INPUT */}
      <input
        className="search-input"
        type="text"
        value={input}
        placeholder="Search location..."
        onChange={(e) => handleChange(e.target.value)}
      />

      {/* RESULTS */}
      {results?.length > 0 && (
        <div className="results-dropdown">
          {results.map((place, index) => (
            <div
              key={index}
              className="result-item"
              onClick={() => handleSelect(place)}
            >
              <div className="result-title">📍 {place.display_name}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;