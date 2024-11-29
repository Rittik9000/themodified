import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Coordinates for the center of the map


// Marker position


const MapComponent = () => {
  return (
    <>
      <MapContainer
        center={[51.505, -0.09]} // Set map center
        zoom={13} // Set initial zoom level
        style={{ width: '100%', height: '100%' }}
      >
        {/* TileLayer: Add a base map layer */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Marker on the map */}
        <Marker position={[51.505, -0.09]} icon={L.icon({ iconUrl: '/path/to/your/custom-icon.png' })}>
          <Popup>Here</Popup>
        </Marker>
      </MapContainer>
      </>
  );
};

export default MapComponent;
