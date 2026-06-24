import react from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">🌍 GeoFinder</div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Explore</li>
        <li>Favorites</li>
      </ul>

      <div className="nav-actions">
        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
};
export default Navbar;