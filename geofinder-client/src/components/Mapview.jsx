import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "./Mapview.css";

const MapUpdater = ({ coordinates }) => {
  const map = useMap();

  useEffect(() => {
    if (
      coordinates &&
      typeof coordinates.lat === "number" &&
      typeof coordinates.lng === "number"
    ) {
      map.setView(
        [coordinates.lat, coordinates.lng],
        15,
        { animate: true }
      );
    }
  }, [coordinates, map]);

  return null;
};

const Mapview = ({ coordinates }) => {
  const defaultPosition = [43.6532, -79.3832];

  const position =
    coordinates &&
    typeof coordinates.lat === "number" &&
    typeof coordinates.lng === "number"
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
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapUpdater coordinates={coordinates} />

        {coordinates && (
          <Marker position={position}>
            <Popup>Selected location</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default Mapview;
