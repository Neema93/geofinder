import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Mapview = ({ coordinates }) => {
  if (!coordinates) {
    return <p>Search for a location...</p>;
  }

  return (
    <MapContainer
      center={[coordinates.lat, coordinates.lng]}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
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
  );
};

export default Mapview;