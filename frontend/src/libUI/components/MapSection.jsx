import { Col } from "react-bootstrap";
import { useState } from "react";
import "./Map.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
export default function MapSection() {
  const [mapPosition, setMapPosition] = useState([34.021224, 71.482345]);
  return (
    <Col md={6} sm={12} className="map-section">
      <div className="mapContainer">
        <h2 className="mt-4">Central Library</h2>
        <hr />
        <MapContainer
          center={mapPosition}
          zoom={12}
          scrollWheelZoom={true}
          className="map"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={mapPosition}>
            <Popup>
              Central Library <br /> University of Peshawar.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </Col>
  );
}
