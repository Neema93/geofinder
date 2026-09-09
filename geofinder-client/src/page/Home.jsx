import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Mapview from "../components/Mapview";
import "./Home.css";

const Home = () => {
  const [location, setLocation] = useState("");
  const [coordinates, setCoordinates] = useState(null);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!location.trim()) {
      setResults([]);
      return;
    }

    const delay = setTimeout(async () => {
      try {
        setLoading(true);

        const cleanQuery = encodeURIComponent(location.trim());

        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${cleanQuery}&limit=5`
        );

        if (!response.ok) {
          throw new Error("Failed to search location");
        }

        const data = await response.json();

        setResults(data);
      } catch (error) {
        console.error("Location search error:", error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 400);

    return () => clearTimeout(delay);
  }, [location]);

  return (
    <>
      <Navbar />

      <div className="home-container">
        <SearchBar
          setLocation={setLocation}
          results={results}
          setCoordinates={setCoordinates}
        />

        <Mapview coordinates={coordinates} />

        {loading && <p>Searching...</p>}
      </div>
    </>
  );
};

export default Home;
