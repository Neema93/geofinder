import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Mapview from "../components/Mapview";

const Home = () => {
  
const [location, setLocation] = useState("");
const [coordinates, setCoordinates] = useState(null);

useEffect(() => {
  if (!location) return;

  fetch(
    `https://nominatim.openstreetmap.org/search?q=${location}&format=json&limit=1`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.length > 0) {
        setCoordinates({
          lat: parseFloat(data[0].lat),
          lng: parseFloat(data[0].lon),
        });
      }
    });
}, [location]);

  return (
    <>
      <Navbar />
      <h1>GeoFinder</h1>

      <SearchBar setLocation={setLocation} />

      <Mapview coordinates={coordinates} />
    </>
  );
};
export default Home;
