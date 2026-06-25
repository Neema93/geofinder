import { useState } from "react";

const SearchBar = ({ setLocation, results, setCoordinates }) => {
  const [input, setInput] = useState("");

  const handleChange = (value) => {
    setInput(value);
    setLocation(value);
  };

  const handleSelect = (place) => {
    setInput(place.display_name); // update input box too

    setLocation(place.display_name);

    setCoordinates({
      lat: parseFloat(place.lat),
      lng: parseFloat(place.lon),
    });
  };

  return (
    <>
      <input
        type="text"
        value={input}
        placeholder="Search location..."
        onChange={(e) => handleChange(e.target.value)}
      />

      {/* 🔽 Suggestions */}
      <div>
        {results?.map((place, index) => (
          <div
            key={index}
            onClick={() => handleSelect(place)}
            style={{
              cursor: "pointer",
              padding: "10px",
              borderBottom: "1px solid #ddd",
              background: "#fff",
            }}
          >
            <div style={{ fontWeight: "bold" }}>
              📍 {place.display_name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchBar;