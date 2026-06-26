import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Mapview from "../components/Mapview";

const Home = () => {
  const [location, setLocation] = useState("");
  const [coordinates, setCoordinates] = useState(null);
  const [results, setResults] = useState([]);

  useEffect(() => {
  if (!location) return;

  const delay = setTimeout(() => {
    const cleanQuery = encodeURIComponent(location);

    fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${cleanQuery}&limit=5`
    )
      .then((res) => res.json())
      .then((data) => setResults(data));
  }, 400); // delay 400ms

  return () => clearTimeout(delay);
}, [location]);

  return (
    <>
      <Navbar />
      <h1>GeoFinder</h1>
<div>
      <SearchBar
        setLocation={setLocation}
        results={results}
        setCoordinates={setCoordinates}
      />

      <Mapview coordinates={coordinates} />
      </div>
    </>
  );
};

export default Home;