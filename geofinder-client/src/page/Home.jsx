import { useState } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import Mapview from '../components/Mapview';

   const Home = () => {
  const [location, setLocation] = useState("");

  return (
    <>
      <Navbar />
      <h1>GeoFinder</h1>

      <SearchBar setLocation={setLocation} />

      <Mapview location={location} />
    </>
  )
}
export default Home;