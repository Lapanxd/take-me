// Map.tsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import MarkerClusterGroup from '@changey/react-leaflet-markercluster';
import 'leaflet/dist/leaflet.css';
import type { MapViewProps } from '.';

const customIcon = new Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/447/447031.png',
  iconSize: [38, 38],
});

// Used for web
export const MapView: React.FC<MapViewProps> = ({ geocodes, names, region }) => {
  return (
    <MapContainer center={region} zoom={13} style={{ width: '100%', height: '92.8vh' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup chunkedLoading>
        {geocodes.map((geocode, index) => (
          <Marker key={index} position={geocode} icon={customIcon}>
            <Popup>{names[index]}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default MapView;
