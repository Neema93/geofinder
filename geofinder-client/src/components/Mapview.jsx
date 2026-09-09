import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Mapview.css";
const Mapview = ({ coordinates }) => {
  const defaultPosition = [43.6532, -79.3832];

  const position = coordinates
    ? [coordinates.lat, coordinates.lng]
    : defaultPosition;

  return (
    <div className="map-container">
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {coordinates && (
          <Marker position={position}>
            <Popup>
              Selected location
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default Mapview;
