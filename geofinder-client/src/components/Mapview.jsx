import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Mapview.css";

const Mapview = ({ coordinates }) => {
  if (!coordinates) {
    return (
      <div className="map-placeholder">
        🗺️ Search for a location to view it on the map
      </div>
    );
  }

  return (
    <div className="map-container">
      <MapContainer
        center={[coordinates.lat, coordinates.lng]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker position={[coordinates.lat, coordinates.lng]}>
          <Popup>
            <strong>Location</strong>
            <br />
            Lat: {coordinates.lat} <br />
            Lng: {coordinates.lng}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Mapview;