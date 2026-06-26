import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Mapview.css";

const Mapview = ({ coordinates }) => {
  if (!coordinates) {
    return (
      <div className="map-placeholder">
        <h2>🗺️ Find a Location</h2>

      <p>
        Search for a city, street, or full address to display it on the map.
      </p>
      </div>
    );
  }

  return (
    <div className="map-container">
      <MapContainer
        center={[coordinates.lat, coordinates.lng]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
        className="map"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[coordinates.lat, coordinates.lng]}>
          <Popup>
            Latitude: {coordinates.lat}
            <br />
            Longitude: {coordinates.lng}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Mapview;