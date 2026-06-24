import { useState } from 'react'
import Navbar from './components/Navbar';
import SearchBar from './components/Searchbar';
import Mapview from './components/Mapview';

function App() {
  

  return (
    <>
    <Navbar />
    <h1>GeoFinder</h1>
    <SearchBar />
    <Mapview />
    </>
  )
}

export default App
