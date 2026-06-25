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
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Marker position={[coordinates.lat, coordinates.lng]}>
        <Popup>
          Lat: {coordinates.lat} <br />
          Lng: {coordinates.lng}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Mapview;